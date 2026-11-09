/**
 * Ethio Marketplace - Sell Item Page JavaScript
 * Form validation, image preview, character counter, and submission.
 */

document.addEventListener("DOMContentLoaded", function () {
  populateSellFormOptions();
  initImagePreview();
  initCharCounter();
  initSellForm();
});

/**
 * Populate category and location dropdowns in the sell form.
 */
function populateSellFormOptions() {
  const categorySelect = document.getElementById("product-category");
  const locationSelect = document.getElementById("product-location");

  if (categorySelect) {
    CATEGORIES.forEach(function (cat) {
      const option = document.createElement("option");
      option.value = cat.id;
      option.textContent = cat.name;
      categorySelect.appendChild(option);
    });
  }

  if (locationSelect) {
    LOCATIONS.forEach(function (loc) {
      const option = document.createElement("option");
      option.value = loc;
      option.textContent = loc;
      locationSelect.appendChild(option);
    });
  }
}

/**
 * Image preview before upload.
 * Shows a preview of the selected image file.
 */
function initImagePreview() {
  const fileInput = document.getElementById("product-image");
  const preview = document.getElementById("image-preview");
  const uploadArea = document.getElementById("image-upload-area");

  if (fileInput && preview) {
    fileInput.addEventListener("change", function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          preview.src = e.target.result;
          preview.classList.add("visible");
        };
        reader.readAsDataURL(file);
      } else {
        preview.classList.remove("visible");
        preview.src = "";
      }
    });
  }

  // Click on upload area triggers file input
  if (uploadArea && fileInput) {
    uploadArea.addEventListener("click", function () {
      fileInput.click();
    });
  }
}

/**
 * Character counter for the description textarea.
 */
function initCharCounter() {
  const textarea = document.getElementById("product-description");
  const counter = document.getElementById("char-counter");
  const maxLength = 500;

  if (textarea && counter) {
    textarea.addEventListener("input", function () {
      const length = this.value.length;
      counter.textContent = length + " / " + maxLength;

      counter.classList.remove("warning", "danger");
      if (length > maxLength * 0.9) {
        counter.classList.add("danger");
      } else if (length > maxLength * 0.7) {
        counter.classList.add("warning");
      }
    });
  }
}

/**
 * Sell form validation and submission handling.
 */
function initSellForm() {
  const form = document.getElementById("sell-form");
  const resetBtn = document.getElementById("reset-btn");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (validateSellForm()) {
        showSuccessMessage();
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      clearFormErrors("sell-form");
      const preview = document.getElementById("image-preview");
      if (preview) {
        preview.classList.remove("visible");
        preview.src = "";
      }
      const counter = document.getElementById("char-counter");
      if (counter) counter.textContent = "0 / 500";
    });
  }
}

/**
 * Validate all sell form fields.
 * Returns true if all fields are valid.
 */
function validateSellForm() {
  clearFormErrors("sell-form");
  let isValid = true;

  const name = document.getElementById("product-name").value.trim();
  const category = document.getElementById("product-category").value;
  const price = document.getElementById("product-price").value.trim();
  const location = document.getElementById("product-location").value;
  const condition = document.getElementById("product-condition").value;
  const description = document.getElementById("product-description").value.trim();
  const contact = document.getElementById("product-contact").value.trim();

  if (!name) {
    showFieldError("product-name", "Product name is required.");
    isValid = false;
  } else if (name.length < 3) {
    showFieldError("product-name", "Product name must be at least 3 characters.");
    isValid = false;
  }

  if (!category) {
    showFieldError("product-category", "Please select a category.");
    isValid = false;
  }

  if (!price) {
    showFieldError("product-price", "Price is required.");
    isValid = false;
  } else if (isNaN(price) || Number(price) <= 0) {
    showFieldError("product-price", "Please enter a valid price in ETB.");
    isValid = false;
  }

  if (!location) {
    showFieldError("product-location", "Please select a location.");
    isValid = false;
  }

  if (!condition) {
    showFieldError("product-condition", "Please select a condition.");
    isValid = false;
  }

  if (!description) {
    showFieldError("product-description", "Description is required.");
    isValid = false;
  } else if (description.length < 20) {
    showFieldError("product-description", "Description must be at least 20 characters.");
    isValid = false;
  } else if (description.length > 500) {
    showFieldError("product-description", "Description cannot exceed 500 characters.");
    isValid = false;
  }

  if (!contact) {
    showFieldError("product-contact", "Contact number is required.");
    isValid = false;
  } else if (!isValidPhone(contact)) {
    showFieldError("product-contact", "Please enter a valid Ethiopian phone number.");
    isValid = false;
  }

  return isValid;
}

/**
 * Show success message after form submission.
 */
function showSuccessMessage() {
  const form = document.getElementById("sell-form");
  const successMsg = document.getElementById("success-message");

  if (form) form.style.display = "none";
  if (successMsg) successMsg.classList.add("visible");
}
