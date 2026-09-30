(function () {
  "use strict";

  const controls = document.querySelector("[data-publication-controls]");
  const items = Array.from(document.querySelectorAll("[data-publication]"));

  if (!controls || items.length === 0) {
    return;
  }

  const searchInput = controls.querySelector("#publication-search");
  const topicFilters = controls.querySelector("[data-topic-filters]");
  const status = controls.querySelector("[data-filter-status]");
  const emptyState = document.querySelector("[data-publication-empty]");
  const yearSections = Array.from(document.querySelectorAll("[data-publication-year]"));
  const allButton = topicFilters.querySelector('[data-topic="all"]');
  const selectedTopics = new Set();
  const topicLabels = new Map();

  items.forEach(function (item) {
    const topics = Array.from(item.querySelectorAll("[data-topic]"));
    item.publicationTopics = topics.map(function (topic) {
      const slug = topic.dataset.topic;
      topicLabels.set(slug, topic.textContent.trim());
      return slug;
    });
    item.publicationSearchText = normalizeText(
      item.textContent + " " + (item.dataset.year || "")
    );
  });

  Array.from(topicLabels.entries())
    .sort(function (left, right) {
      return left[1].localeCompare(right[1]);
    })
    .forEach(function (entry) {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.topic = entry[0];
      button.setAttribute("aria-pressed", "false");
      button.textContent = entry[1];
      topicFilters.appendChild(button);
    });

  function normalizeText(value) {
    return value
      .toLocaleLowerCase()
      .normalize("NFKD")
      .replace(/[\u2018\u2019\u201B\u02BC\uFF07`\u00B4\u2032]/g, "'");
  }

  function readHash() {
    const rawHash = window.location.hash.slice(1);
    const params = new URLSearchParams(rawHash);
    const requestedTopics = (params.get("topics") || "")
      .split(",")
      .filter(function (topic) {
        return topicLabels.has(topic);
      });

    selectedTopics.clear();
    requestedTopics.forEach(function (topic) {
      selectedTopics.add(topic);
    });
    searchInput.value = params.get("q") || "";
  }

  function writeHash() {
    const params = new URLSearchParams();
    const query = searchInput.value.trim();

    if (selectedTopics.size > 0) {
      params.set("topics", Array.from(selectedTopics).sort().join(","));
    }
    if (query) {
      params.set("q", query);
    }

    const hash = params.toString();
    const nextUrl = window.location.pathname + window.location.search + (hash ? "#" + hash : "");
    window.history.replaceState(null, "", nextUrl);
  }

  function updateButtons() {
    allButton.setAttribute("aria-pressed", String(selectedTopics.size === 0));
    topicFilters.querySelectorAll('button[data-topic]:not([data-topic="all"])').forEach(function (button) {
      button.setAttribute("aria-pressed", String(selectedTopics.has(button.dataset.topic)));
    });
  }

  function applyFilters(updateUrl) {
    const query = normalizeText(searchInput.value.trim());
    let visibleCount = 0;

    items.forEach(function (item) {
      const matchesSearch = !query || item.publicationSearchText.includes(query);
      const matchesTopic =
        selectedTopics.size === 0 ||
        item.publicationTopics.some(function (topic) {
          return selectedTopics.has(topic);
        });
      const visible = matchesSearch && matchesTopic;

      item.hidden = !visible;
      if (visible) {
        visibleCount += 1;
      }
    });

    yearSections.forEach(function (section) {
      section.hidden = !section.querySelector("[data-publication]:not([hidden])");
    });

    emptyState.hidden = visibleCount !== 0;
    status.textContent = "Showing " + visibleCount + " of " + items.length + " publications.";
    updateButtons();

    if (updateUrl) {
      writeHash();
    }
  }

  topicFilters.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-topic]");
    if (!button) {
      return;
    }

    const topic = button.dataset.topic;
    if (topic === "all") {
      selectedTopics.clear();
    } else if (selectedTopics.has(topic)) {
      selectedTopics.delete(topic);
    } else {
      selectedTopics.add(topic);
    }
    applyFilters(true);
  });

  searchInput.addEventListener("input", function () {
    applyFilters(true);
  });

  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && searchInput.value) {
      searchInput.value = "";
      applyFilters(true);
    }
  });

  window.addEventListener("hashchange", function () {
    readHash();
    applyFilters(false);
  });

  controls.hidden = false;
  readHash();
  applyFilters(false);
})();
