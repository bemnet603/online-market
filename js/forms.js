/**
 * Ethio Marketplace - Form Validation JavaScript
 * Handles validation for Login, Register, and Contact forms.
 */

document.addEventListener("DOMContentLoaded", function () {
  initLoginForm();
  initRegisterForm();
  initContactForm();
});

/**
 * Login form validation.
 */
function initLoginForm() {
  const form = document.getElementById("login-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearFormErrors("login-form");
    let isValid = true;

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    if (!email) {
      showFieldError("login-email", "Email is required.");
      isValid = false;
    } else if (!isValidEmail(email)) {
      showFieldError("login-email", "Please enter a valid email address.");
      isValid = false;
    }

    if (!password) {
      showFieldError("login-password", "Password is required.");
      isValid = false;
    } else if (password.length < 6) {
      showFieldError("login-password", "Password must be at least 6 characters.");
      isValid = false;
    }

    if (isValid) {
      alert("Login successful! (Demo only - no backend yet)\n\nIn a future version, you will be redirected to your dashboard.");
    }
  });
}

/**
 * Register form validation.
 */
function initRegisterForm() {
  const form = document.getElementById("register-form");
  if (!form) return;

  // Populate location dropdown
  const locationSelect = document.getElementById("register-location");
  if (locationSelect) {
    LOCATIONS.forEach(function (loc) {
      const option = document.createElement("option");
      option.value = loc;
      option.textContent = loc;
      locationSelect.appendChild(option);
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearFormErrors("register-form");
    let isValid = true;

    const fullName = document.getElementById("register-name").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const phone = document.getElementById("register-phone").value.trim();
    const location = document.getElementById("register-location").value;
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("register-confirm-password").value;

    if (!fullName) {
      showFieldError("register-name", "Full name is required.");
      isValid = false;
    } else if (fullName.length < 2) {
      showFieldError("register-name", "Please enter your full name.");
      isValid = false;
    }

    if (!email) {
      showFieldError("register-email", "Email is required.");
      isValid = false;
    } else if (!isValidEmail(email)) {
      showFieldError("register-email", "Please enter a valid email address.");
      isValid = false;
    }

    if (!phone) {
      showFieldError("register-phone", "Phone number is required.");
      isValid = false;
    } else if (!isValidPhone(phone)) {
      showFieldError("register-phone", "Please enter a valid Ethiopian phone number.");
      isValid = false;
    }

    if (!location) {
      showFieldError("register-location", "Please select your location.");
      isValid = false;
    }

    if (!password) {
      showFieldError("register-password", "Password is required.");
      isValid = false;
    } else if (password.length < 6) {
      showFieldError("register-password", "Password must be at least 6 characters.");
      isValid = false;
    }

    if (!confirmPassword) {
      showFieldError("register-confirm-password", "Please confirm your password.");
      isValid = false;
    } else if (password !== confirmPassword) {
      showFieldError("register-confirm-password", "Passwords do not match.");
      isValid = false;
    }

    if (isValid) {
      alert("Registration successful! (Demo only - no backend yet)\n\nWelcome to Ethio Marketplace, " + fullName + "!");
    }
  });
}

/**
 * Contact form validation.
 */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearFormErrors("contact-form");
    let isValid = true;

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const subject = document.getElementById("contact-subject").value;
    const message = document.getElementById("contact-message").value.trim();

    if (!name) {
      showFieldError("contact-name", "Name is required.");
      isValid = false;
    }

    if (!email) {
      showFieldError("contact-email", "Email is required.");
      isValid = false;
    } else if (!isValidEmail(email)) {
      showFieldError("contact-email", "Please enter a valid email address.");
      isValid = false;
    }

    if (!subject) {
      showFieldError("contact-subject", "Please select a subject.");
      isValid = false;
    }

    if (!message) {
      showFieldError("contact-message", "Message is required.");
      isValid = false;
    } else if (message.length < 10) {
      showFieldError("contact-message", "Message must be at least 10 characters.");
      isValid = false;
    }

    if (isValid) {
      alert("Thank you for your message! (Demo only - no backend yet)\n\nWe will get back to you within 24 hours.");
      form.reset();
    }
  });
}
