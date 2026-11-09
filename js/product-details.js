/**
 * Ethio Marketplace - Product Details Page JavaScript
 * Populates layout placeholders from listing templates.
 * Real product data will come from MongoDB in future versions.
 */

document.addEventListener("DOMContentLoaded", function () {
  loadProductDetails();
  loadRelatedPlaceholders();
});

/**
 * Load listing template data into the details page placeholders.
 */
function loadProductDetails() {
  const listingId = getUrlParam("id");
  const listing = getListingById(listingId);

  // If no valid ID, keep default placeholder text
  if (!listing) return;

  const categoryEl = document.getElementById("product-category");
  const locationEl = document.getElementById("product-location");
  const conditionEl = document.getElementById("product-condition");
  const breadcrumbEl = document.getElementById("product-breadcrumb");

  if (breadcrumbEl) breadcrumbEl.textContent = listing.name;
  if (categoryEl) categoryEl.textContent = getCategoryName(listing.category);
  if (locationEl) locationEl.textContent = listing.location;
  if (conditionEl) conditionEl.textContent = listing.condition;

  // Contact seller button (demo only)
  const contactBtn = document.getElementById("contact-seller-btn");
  if (contactBtn) {
    contactBtn.addEventListener("click", function () {
      alert("Contact Seller\n\nIn a future version, you will be able to message sellers directly through the platform.");
    });
  }
}

/**
 * Render related product placeholder cards (layout only).
 */
function loadRelatedPlaceholders() {
  const container = document.getElementById("related-products-grid");
  if (!container) return;

  let html = "";
  for (let i = 0; i < 4; i++) {
    html += createPlaceholderCard();
  }
  container.innerHTML = html;
}
