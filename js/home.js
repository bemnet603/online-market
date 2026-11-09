/**
 * Ethio Marketplace - Homepage JavaScript
 * Renders category cards and handles homepage search.
 */

document.addEventListener("DOMContentLoaded", function () {
  renderCategories();
  initHomeSearch();
});

/**
 * Render category cards on the homepage.
 */
function renderCategories() {
  const container = document.getElementById("categories-grid");
  if (!container) return;

  let html = "";
  CATEGORIES.forEach(function (category) {
    html +=
      '<a href="pages/marketplace.html?category=' + category.id + '" class="card category-card">' +
        '<div class="category-icon">' + category.icon + '</div>' +
        '<h3>' + category.name + '</h3>' +
        '<p>' + category.description + '</p>' +
      '</a>';
  });

  container.innerHTML = html;
}

/**
 * Homepage search bar — redirects to marketplace with search query.
 */
function initHomeSearch() {
  const searchForm = document.getElementById("home-search-form");
  if (!searchForm) return;

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const query = document.getElementById("home-search-input").value.trim();
    if (query) {
      window.location.href = "pages/marketplace.html?search=" + encodeURIComponent(query);
    } else {
      window.location.href = "pages/marketplace.html";
    }
  });
}
