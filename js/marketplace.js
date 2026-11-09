/**
 * Ethio Marketplace - Marketplace Page JavaScript
 * Handles search, filtering, sorting, and pagination.
 * Uses layout-only listing templates until MongoDB is connected.
 */

let filteredListings = [];
let currentPage = 1;

document.addEventListener("DOMContentLoaded", function () {
  populateFilters();
  applyFiltersFromUrl();
  initFilterListeners();
  filterAndDisplayListings();
});

/**
 * Fill category, location, and condition dropdown filters.
 */
function populateFilters() {
  const categoryFilter = document.getElementById("filter-category");
  const locationFilter = document.getElementById("filter-location");
  const conditionFilter = document.getElementById("filter-condition");

  if (categoryFilter) {
    CATEGORIES.forEach(function (cat) {
      const option = document.createElement("option");
      option.value = cat.id;
      option.textContent = cat.name;
      categoryFilter.appendChild(option);
    });
  }

  if (locationFilter) {
    LOCATIONS.forEach(function (loc) {
      const option = document.createElement("option");
      option.value = loc;
      option.textContent = loc;
      locationFilter.appendChild(option);
    });
  }

  if (conditionFilter) {
    CONDITIONS.forEach(function (cond) {
      const option = document.createElement("option");
      option.value = cond;
      option.textContent = cond;
      conditionFilter.appendChild(option);
    });
  }
}

/**
 * Read URL parameters and pre-fill filters.
 */
function applyFiltersFromUrl() {
  const searchParam = getUrlParam("search");
  const categoryParam = getUrlParam("category");

  if (searchParam) {
    const searchInput = document.getElementById("search-input");
    if (searchInput) searchInput.value = searchParam;
  }

  if (categoryParam) {
    const categoryFilter = document.getElementById("filter-category");
    if (categoryFilter) categoryFilter.value = categoryParam;
  }
}

/**
 * Attach event listeners to filter and sort controls.
 */
function initFilterListeners() {
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("filter-category");
  const locationFilter = document.getElementById("filter-location");
  const conditionFilter = document.getElementById("filter-condition");
  const sortSelect = document.getElementById("sort-select");
  const searchForm = document.getElementById("search-form");

  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      currentPage = 1;
      filterAndDisplayListings();
    });
  }

  [categoryFilter, locationFilter, conditionFilter, sortSelect].forEach(function (el) {
    if (el) {
      el.addEventListener("change", function () {
        currentPage = 1;
        filterAndDisplayListings();
      });
    }
  });

  if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener("input", function () {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(function () {
        currentPage = 1;
        filterAndDisplayListings();
      }, 300);
    });
  }
}

/**
 * Filter, sort, paginate, and display listing templates.
 */
function filterAndDisplayListings() {
  const searchQuery = (document.getElementById("search-input")?.value || "").toLowerCase().trim();
  const category = document.getElementById("filter-category")?.value || "";
  const location = document.getElementById("filter-location")?.value || "";
  const condition = document.getElementById("filter-condition")?.value || "";
  const sortBy = document.getElementById("sort-select")?.value || "newest";

  filteredListings = LISTING_TEMPLATES.slice();

  // Search matches category name or location
  if (searchQuery) {
    filteredListings = filteredListings.filter(function (listing) {
      return (
        listing.name.toLowerCase().includes(searchQuery) ||
        getCategoryName(listing.category).toLowerCase().includes(searchQuery) ||
        listing.location.toLowerCase().includes(searchQuery)
      );
    });
  }

  if (category) {
    filteredListings = filteredListings.filter(function (listing) {
      return listing.category === category;
    });
  }

  if (location) {
    filteredListings = filteredListings.filter(function (listing) {
      return listing.location === location;
    });
  }

  if (condition) {
    filteredListings = filteredListings.filter(function (listing) {
      return listing.condition === condition;
    });
  }

  sortListings(sortBy);
  displayListings();
  displayPagination();
  updateResultsCount();
}

/**
 * Sort listings. Uses listingOrder until real price/date data exists.
 */
function sortListings(sortBy) {
  switch (sortBy) {
    case "price-low":
      filteredListings.sort(function (a, b) { return a.listingOrder - b.listingOrder; });
      break;
    case "price-high":
      filteredListings.sort(function (a, b) { return b.listingOrder - a.listingOrder; });
      break;
    case "newest":
      filteredListings.sort(function (a, b) { return b.listingOrder - a.listingOrder; });
      break;
    case "oldest":
      filteredListings.sort(function (a, b) { return a.listingOrder - b.listingOrder; });
      break;
  }
}

/**
 * Display listing cards for the current page.
 */
function displayListings() {
  const container = document.getElementById("products-grid");
  const noResults = document.getElementById("no-results");
  if (!container) return;

  const startIndex = (currentPage - 1) * LISTINGS_PER_PAGE;
  const endIndex = startIndex + LISTINGS_PER_PAGE;
  const pageListings = filteredListings.slice(startIndex, endIndex);

  if (pageListings.length === 0) {
    container.innerHTML = "";
    if (noResults) noResults.style.display = "block";
    return;
  }

  if (noResults) noResults.style.display = "none";

  let html = "";
  pageListings.forEach(function (listing) {
    html += createProductCard(listing);
  });

  container.innerHTML = html;
}

/**
 * Display pagination buttons.
 */
function displayPagination() {
  const container = document.getElementById("pagination");
  if (!container) return;

  const totalPages = Math.ceil(filteredListings.length / LISTINGS_PER_PAGE);

  if (totalPages <= 1) {
    container.innerHTML = "";
    return;
  }

  let html = "";
  html += '<button ' + (currentPage === 1 ? "disabled" : "") + ' onclick="goToPage(' + (currentPage - 1) + ')">← Prev</button>';

  for (let i = 1; i <= totalPages; i++) {
    html += '<button class="' + (i === currentPage ? "active" : "") + '" onclick="goToPage(' + i + ')">' + i + "</button>";
  }

  html += '<button ' + (currentPage === totalPages ? "disabled" : "") + ' onclick="goToPage(' + (currentPage + 1) + ')">Next →</button>';
  container.innerHTML = html;
}

/**
 * Go to a specific page.
 */
function goToPage(page) {
  const totalPages = Math.ceil(filteredListings.length / LISTINGS_PER_PAGE);
  if (page < 1 || page > totalPages) return;

  currentPage = page;
  displayListings();
  displayPagination();

  const grid = document.getElementById("products-grid");
  if (grid) grid.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Update the results count text.
 */
function updateResultsCount() {
  const countEl = document.getElementById("results-count");
  if (countEl) {
    countEl.textContent = filteredListings.length + " listing template" + (filteredListings.length !== 1 ? "s" : "") + " shown";
  }
}
