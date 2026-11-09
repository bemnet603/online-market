/**
 * Ethio Marketplace - Utility Functions
 * Helper functions used across multiple pages.
 */

/**
 * Get the category name from a category ID.
 */
function getCategoryName(categoryId) {
  const category = CATEGORIES.find(function (cat) {
    return cat.id === categoryId;
  });
  return category ? category.name : "Category";
}

/**
 * Get a listing template by ID (layout demo only).
 */
function getListingById(id) {
  return LISTING_TEMPLATES.find(function (listing) {
    return listing.id === Number(id);
  });
}

/**
 * Get the correct URL for a product details page.
 */
function getProductDetailsUrl(listingId) {
  const inPages = window.location.pathname.includes("/pages/");
  return (inPages ? "" : "pages/") + "product-details.html?id=" + listingId;
}

/**
 * Create HTML for a reusable product card template.
 * Shows layout placeholders only — no prices or seller info.
 */
function createProductCard(listing) {
  return (
    '<article class="card product-card">' +
      '<div class="placeholder-image" aria-hidden="true">' +
        '<span class="placeholder-label">Product Image</span>' +
      '</div>' +
      '<div class="product-card-body">' +
        '<h3 class="product-card-title">' + listing.name + '</h3>' +
        '<p class="product-card-category">' + getCategoryName(listing.category) + '</p>' +
        '<p class="product-card-meta">📍 ' + listing.location + '</p>' +
        '<a href="' + getProductDetailsUrl(listing.id) + '" class="btn btn-primary btn-sm">View Details</a>' +
      '</div>' +
    '</article>'
  );
}

/**
 * Create a static placeholder card for related products section.
 */
function createPlaceholderCard() {
  return (
    '<article class="card product-card">' +
      '<div class="placeholder-image" aria-hidden="true">' +
        '<span class="placeholder-label">Product Image</span>' +
      '</div>' +
      '<div class="product-card-body">' +
        '<h3 class="product-card-title">Product Name</h3>' +
        '<p class="product-card-category">Category</p>' +
        '<p class="product-card-meta">📍 Location</p>' +
        '<a href="product-details.html" class="btn btn-primary btn-sm">View Details</a>' +
      '</div>' +
    '</article>'
  );
}

/**
 * Get a URL parameter value by name.
 */
function getUrlParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

/**
 * Show an error message below a form field.
 */
function showFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorEl = document.getElementById(fieldId + "-error");

  if (field) field.classList.add("error");
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.classList.add("visible");
  }
}

/**
 * Clear all error messages from a form.
 */
function clearFormErrors(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.querySelectorAll(".form-control.error").forEach(function (field) {
    field.classList.remove("error");
  });

  form.querySelectorAll(".form-error.visible").forEach(function (msg) {
    msg.classList.remove("visible");
    msg.textContent = "";
  });
}

/**
 * Simple email validation.
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Simple phone validation (Ethiopian format).
 */
function isValidPhone(phone) {
  return /^(\+251|0)?[79]\d{8}$/.test(phone.replace(/\s/g, ""));
}
