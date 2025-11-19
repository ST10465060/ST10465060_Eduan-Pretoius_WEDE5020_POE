// main.js
// Part 3: basic site JS (footer year + form behaviour)

document.addEventListener("DOMContentLoaded", function () {
  setFooterYear();
  setupEnquiryForm();
});

// Set the current year in any footer with <span id="year">
function setFooterYear() {
  var yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// Attach validation + response logic to enquiry form
function setupEnquiryForm() {
  var form = document.querySelector('[data-js="enquiry-form"]');
  
  // If we are not on enquiry page, do nothing
  if (!form) return; 

  var nameInput = document.getElementById("enquiry-name");
  var emailInput = document.getElementById("enquiry-email");
  var phoneInput = document.getElementById("enquiry-phone");
  var locationSelect = document.getElementById("enquiry-location");
  var messageInput = document.getElementById("enquiry-message");
  var consentCheckbox = document.getElementById("enquiry-consent");
  var resultBox = document.getElementById("enquiry-result");

  form.addEventListener("submit", function (event) {
    
    // stop normal submit for client-side validation
    event.preventDefault(); 

    // Clear previous messages
    if (resultBox) {
      resultBox.textContent = "";
      resultBox.className = "full form-result";
    }

    clearFieldErrors(form);

    var isValid = true;

    // Name: required, at least 2 characters
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      setFieldError(nameInput, "Please enter your full name.");
      isValid = false;
    }

    // Email: basic HTML5 validation plus a simple pattern
    if (!emailInput.value.trim()) {
      setFieldError(emailInput, "Please enter your email address.");
      isValid = false;
    } else if (!isRoughEmail(emailInput.value.trim())) {
      setFieldError(emailInput, "Please enter a valid email address.");
      isValid = false;
    }

    // Phone: optional, but if present, do a basic ZA check
    if (phoneInput.value.trim() && !isSouthAfricanPhone(phoneInput.value.trim())) {
      setFieldError(phoneInput, "Please use a phone number like 0821234567 or +27821234567.");
      isValid = false;
    }

    // Location: required (avoid the disabled placeholder)
    if (!locationSelect.value) {
      setFieldError(locationSelect, "Please choose a location.");
      isValid = false;
    }

    // Session type: one radio must be checked
    var typeValue = getCheckedValue("type");
    if (!typeValue) {
      
      // We attach error to the fieldset (first radio’s parent)
      var radios = form.querySelectorAll('input[name="type"]');
      if (radios.length > 0) {
        setFieldError(radios[0], "Please select a session type.");
      }
      isValid = false;
    }

    // Message: required, minimum length
    if (!messageInput.value.trim() || messageInput.value.trim().length < 20) {
      setFieldError(messageInput, "Please tell us a bit more (at least 20 characters).");
      isValid = false;
    }

    // Consent: must be ticked
    if (!consentCheckbox.checked) {
      setFieldError(consentCheckbox, "Please confirm that we may use your details to respond.");
      isValid = false;
    }

    if (!isValid) {
      if (resultBox) {
        resultBox.textContent = "Please fix the highlighted fields and try again.";
        resultBox.className = "full form-result error";
      }
      return;
    }

    // If valid, build a simple response based on session type and location
    var responseText = buildEnquiryResponse(nameInput.value.trim(), typeValue, locationSelect.value);

    if (resultBox) {
      resultBox.textContent = responseText;
      resultBox.className = "full form-result success";
    }

    // Optional: clear the form after a successful "pseudo-submit"
    form.reset();
  });
}

// Helper: clear any previous field error messages
function clearFieldErrors(form) {
  var errorSpans = form.querySelectorAll(".field-error");
  errorSpans.forEach(function (span) {
    span.remove();
  });

  var erroredFields = form.querySelectorAll(".has-error");
  erroredFields.forEach(function (field) {
    field.classList.remove("has-error");
  });
}

// Helper: attach an error message next to an input
function setFieldError(inputElement, message) {
  if (!inputElement) return;

  // Add class to highlight input (styled in CSS)
  inputElement.classList.add("has-error");

  // Create a small span under the field
  var span = document.createElement("span");
  span.className = "field-error";
  span.textContent = message;

  // Insert after the input’s parent label, if possible
  var parent = inputElement.closest("label") || inputElement.parentElement;
  if (parent) {
    parent.appendChild(span);
  }
}

// Helper: very simple email check (inspired by HTML5 patterns)
function isRoughEmail(value) {
  
  // Not perfect, but good enough for this module
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(value);
}

// Helper: basic SA phone number pattern
function isSouthAfricanPhone(value) {
  
  // Accepts 0XXXXXXXXX or +27XXXXXXXXX (10 or 12 digits including prefix)
  var pattern = /^(\+27|0)\d{9}$/;
  return pattern.test(value);
}

// Helper: return the value of the checked radio in a group
function getCheckedValue(name) {
  var radios = document.querySelectorAll('input[name="' + name + '"]');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
  return "";
}

// Build a simple human-readable response message
function buildEnquiryResponse(name, typeValue, locationValue) {
  var friendlyType = "";
  var priceHint = "";

  switch (typeValue) {
    case "psychotherapy":
      friendlyType = "equine‑assisted psychotherapy session";
      priceHint = "from around R750–R950 per 50–60 minute session";
      break;
    case "learning":
      friendlyType = "equine‑assisted learning session";
      priceHint = "from around R650–R850 depending on group size";
      break;
    case "family":
      friendlyType = "family session in the paddock";
      priceHint = "from around R900–R1200 per family session";
      break;
    case "workshop":
      friendlyType = "workshop or small group program";
      priceHint = "priced per half‑day or full‑day";
      break;
    case "corporate":
      friendlyType = "corporate team building day";
      priceHint = "quoted per group and programme design";
      break;
    default:
      friendlyType = "session";
      priceHint = "pricing depends on the final plan.";
  }

  var locationText = "";
  if (locationValue === "sandton") {
    locationText = "in the Johannesburg (Sandton) area.";
  } else if (locationValue === "centurion") {
    locationText = "in the Pretoria (Centurion) area.";
  } else {
    locationText = "at either Sandton or Centurion, depending on availability.";
  }

  return (
    "Thank you, " +
    name +
    ". Based on your selection we’ll send you more detail about a " +
    friendlyType +
    " " +
    locationText +
    " Typical pricing is " +
    priceHint +
    " and we’ll confirm exact times and availability by email."
  );
}