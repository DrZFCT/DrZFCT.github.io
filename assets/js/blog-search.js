(function () {
  "use strict";

  const controls = document.querySelector("[data-blog-search-controls]");
  const list = document.querySelector("[data-blog-post-list]");
  const elements = Array.from(document.querySelectorAll("[data-blog-post]"));

  if (!controls || !list || elements.length === 0) {
    return;
  }

  const searchInput = controls.querySelector("#blog-search");
  const tagRow = controls.querySelector("[data-blog-tag-row]");
  const tagFilters = controls.querySelector("[data-blog-tag-filters]");
  const allTagsButton = controls.querySelector("[data-tag-all]");
  const status = controls.querySelector("[data-blog-filter-status]");
  const emptyState = document.querySelector("[data-blog-search-empty]");
  const selectedTags = new Set();
  const tagLabels = new Map();
  let posts = [];
  let inputTimer;

  function normalizeText(value) {
    return String(value || "")
      .toLocaleLowerCase()
      .normalize("NFKD")
      .replace(/[\u2018\u2019\u201B\u02BC\uFF07`\u00B4\u2032]/g, "'")
      .replace(/[\u0300-\u036f]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function preparePost(entry, element, originalOrder) {
    const tags = Array.isArray(entry.tags) ? entry.tags : [];
    const normalizedTags = tags.map(function (tag) {
      const normalized = normalizeText(tag);
      tagLabels.set(normalized, tag);
      return normalized;
    });
    const excerptElement = element.querySelector("[data-blog-post-excerpt]");
    const titleElement = element.querySelector(".blog-post-title a");

    return {
      title: entry.title || "",
      url: entry.url,
      date: entry.date || "",
      dateText: entry.date_text || "",
      excerpt: entry.excerpt || "",
      content: entry.content || "",
      tags: tags,
      normalizedTitle: normalizeText(entry.title),
      normalizedExcerpt: normalizeText(entry.excerpt),
      normalizedContent: normalizeText(entry.content),
      normalizedTags: normalizedTags,
      normalizedDate: normalizeText((entry.date || "") + " " + (entry.date_text || "")),
      element: element,
      titleElement: titleElement,
      excerptElement: excerptElement,
      originalExcerpt: excerptElement ? excerptElement.innerHTML : "",
      originalOrder: originalOrder,
      score: 0
    };
  }

  function buildTagButtons() {
    Array.from(tagLabels.entries())
      .sort(function (left, right) {
        return left[1].localeCompare(right[1]);
      })
      .forEach(function (entry) {
        const button = document.createElement("button");
        button.type = "button";
        button.dataset.tag = entry[0];
        button.setAttribute("aria-pressed", "false");
        button.textContent = entry[1];
        tagFilters.appendChild(button);
      });

    tagRow.hidden = tagLabels.size === 0;
  }

  function scorePost(post, query, tokens) {
    const combined = [
      post.normalizedTitle,
      post.normalizedExcerpt,
      post.normalizedContent,
      post.normalizedTags.join(" "),
      post.normalizedDate
    ].join(" ");

    if (!tokens.every(function (token) { return combined.includes(token); })) {
      return -1;
    }

    let score = 0;
    if (post.normalizedTitle.includes(query)) score += 120;
    if (post.normalizedTags.join(" ").includes(query)) score += 70;
    if (post.normalizedExcerpt.includes(query)) score += 35;
    if (post.normalizedContent.includes(query)) score += 12;

    tokens.forEach(function (token) {
      if (post.normalizedTitle.includes(token)) score += 35;
      if (post.normalizedTags.some(function (tag) { return tag.includes(token); })) score += 22;
      if (post.normalizedExcerpt.includes(token)) score += 10;
      if (post.normalizedContent.includes(token)) score += 3;
      if (post.normalizedDate.includes(token)) score += 2;
    });

    return score;
  }

  function makeSnippet(post, tokens) {
    const excerptHasMatch = tokens.some(function (token) {
      return post.normalizedExcerpt.includes(token);
    });
    const source = (excerptHasMatch ? post.excerpt : post.content).replace(/\s+/g, " ").trim();
    const normalizedSource = normalizeText(source);
    let matchIndex = source.length > 0 ? 0 : -1;

    tokens.forEach(function (token) {
      const index = normalizedSource.indexOf(token);
      if (index !== -1 && (matchIndex === 0 || index < matchIndex)) {
        matchIndex = index;
      }
    });

    const radius = 115;
    let start = Math.max(0, matchIndex - radius);
    let end = Math.min(source.length, Math.max(matchIndex, 0) + radius);

    if (start > 0) {
      const nextSpace = source.indexOf(" ", start);
      if (nextSpace !== -1 && nextSpace < end) start = nextSpace + 1;
    }
    if (end < source.length) {
      const previousSpace = source.lastIndexOf(" ", end);
      if (previousSpace > start) end = previousSpace;
    }
    let snippet = source.slice(start, end).trim();

    if (start > 0) snippet = "…" + snippet;
    if (end < source.length) snippet += "…";
    return snippet;
  }

  function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function tokenPattern(token) {
    return Array.from(token).map(function (character) {
      if (character === "'") {
        return "['\\u2018\\u2019\\u201B\\u02BC\\uFF07`\\u00B4\\u2032]";
      }
      return escapeRegExp(character);
    }).join("");
  }

  function renderHighlightedText(element, text, tokens) {
    if (!element) return;

    const expression = new RegExp("(" + tokens.map(tokenPattern).join("|") + ")", "gi");
    const pieces = text.split(expression);
    element.replaceChildren();

    pieces.forEach(function (piece) {
      if (tokens.some(function (token) { return normalizeText(piece) === token; })) {
        const mark = document.createElement("mark");
        mark.textContent = piece;
        element.appendChild(mark);
      } else {
        element.appendChild(document.createTextNode(piece));
      }
    });
  }

  function renderSnippet(post, tokens) {
    if (!post.excerptElement) return;

    const snippet = makeSnippet(post, tokens);
    renderHighlightedText(post.excerptElement, snippet, tokens);
  }

  function restorePostText(post) {
    if (post.titleElement) {
      post.titleElement.textContent = post.title;
    }
    if (post.excerptElement) {
      post.excerptElement.innerHTML = post.originalExcerpt;
    }
  }

  function updateButtons() {
    allTagsButton.setAttribute("aria-pressed", String(selectedTags.size === 0));
    tagFilters.querySelectorAll("button[data-tag]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(selectedTags.has(button.dataset.tag)));
    });
  }

  function readHash() {
    const params = new URLSearchParams(window.location.hash.slice(1));
    selectedTags.clear();
    params.getAll("tag").forEach(function (tag) {
      const normalized = normalizeText(tag);
      if (tagLabels.has(normalized)) selectedTags.add(normalized);
    });
    searchInput.value = params.get("q") || "";
  }

  function writeHash() {
    const params = new URLSearchParams();
    const query = searchInput.value.trim();

    if (query) params.set("q", query);
    Array.from(selectedTags).sort().forEach(function (tag) {
      params.append("tag", tagLabels.get(tag));
    });

    const hash = params.toString();
    const nextUrl = window.location.pathname + window.location.search + (hash ? "#" + hash : "");
    window.history.replaceState(null, "", nextUrl);
  }

  function applyFilters(updateUrl) {
    const query = normalizeText(searchInput.value);
    const tokens = query.split(" ").filter(Boolean);
    const hasQuery = tokens.length > 0;
    const visiblePosts = [];

    posts.forEach(function (post) {
      const matchesTags = selectedTags.size === 0 || post.normalizedTags.some(function (tag) {
        return selectedTags.has(tag);
      });
      post.score = hasQuery ? scorePost(post, query, tokens) : 0;
      const visible = matchesTags && post.score >= 0;
      post.element.hidden = !visible;

      if (visible) {
        visiblePosts.push(post);
        if (hasQuery) {
          renderHighlightedText(post.titleElement, post.title, tokens);
          renderSnippet(post, tokens);
        } else {
          restorePostText(post);
        }
      }
    });

    visiblePosts.sort(function (left, right) {
      if (hasQuery && right.score !== left.score) return right.score - left.score;
      const dateOrder = right.date.localeCompare(left.date);
      return dateOrder || left.originalOrder - right.originalOrder;
    });
    visiblePosts.forEach(function (post) {
      list.appendChild(post.element);
    });

    emptyState.hidden = visiblePosts.length !== 0;
    status.textContent = "Showing " + visiblePosts.length + " of " + posts.length + " posts.";
    updateButtons();
    if (updateUrl) writeHash();
  }

  tagFilters.addEventListener("click", function (event) {
    const button = event.target.closest("button");
    if (!button) return;

    if (button.hasAttribute("data-tag-all")) {
      selectedTags.clear();
    } else if (button.dataset.tag) {
      if (selectedTags.has(button.dataset.tag)) selectedTags.delete(button.dataset.tag);
      else selectedTags.add(button.dataset.tag);
    }
    applyFilters(true);
  });

  searchInput.addEventListener("input", function () {
    window.clearTimeout(inputTimer);
    inputTimer = window.setTimeout(function () {
      applyFilters(true);
    }, 80);
  });

  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && searchInput.value) {
      searchInput.value = "";
      window.clearTimeout(inputTimer);
      applyFilters(true);
    }
  });

  window.addEventListener("hashchange", function () {
    readHash();
    applyFilters(false);
  });

  fetch(controls.dataset.indexUrl, { cache: "no-store" })
    .then(function (response) {
      if (!response.ok) throw new Error("Unable to load the blog search index.");
      return response.json();
    })
    .then(function (index) {
      const elementsByUrl = new Map(elements.map(function (element, order) {
        return [element.dataset.postUrl, { element: element, order: order }];
      }));

      posts = index.map(function (entry) {
        const match = elementsByUrl.get(entry.url);
        return match ? preparePost(entry, match.element, match.order) : null;
      }).filter(Boolean);

      buildTagButtons();
      readHash();
      controls.hidden = false;
      applyFilters(false);
    })
    .catch(function (error) {
      console.warn(error);
    });
})();
