// Check if password and re-password is match or not ?
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("c-password");
const passwordError = document.getElementById("password-error");
const form = document.querySelector("form");
const strengthMeter = document.getElementById("strength-meter");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");
const inputs = document.querySelectorAll("input");
confirmPasswordInput.addEventListener("input", () => {
  if (confirmPasswordInput.value !== passwordInput.value) {
    passwordError.style.display = "block";
  } else {
    passwordError.style.display = "none";
  }
});

form.addEventListener("submit", (event) => {
  if (confirmPasswordInput.value !== passwordInput.value) {
    event.preventDefault(); // Prevent form submission
    passwordError.style.display = "block";
  }
});


// Dynamic input border color base on the action  of user on inputting (none/valid/invalid)
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value.trim() === "") {
      input.classList.remove("valid");
      input.classList.remove("invalid");
    } else if (input.checkValidity()) {
      input.classList.add("valid");
      input.classList.remove("invalid");
    } else {
      input.classList.add("invalid");
      input.classList.remove("valid");
    }
  });

  input.addEventListener("blur", () => {
    if (input.value.trim() === "") {
      input.classList.remove("valid");
      input.classList.remove("invalid");
    }
  });
});

// Event listener for password input
passwordInput.addEventListener("input", () => {
    const password = passwordInput.value.trim();
    if (password === "") {
      // Hide the strength meter and text if input is empty
      strengthMeter.classList.add("hide");
      strengthText.classList.add("hide");
    } else {
      // Show the strength meter and text if input is not empty
      strengthMeter.classList.remove("hide");
      strengthText.classList.remove("hide");
    }
  });
  
// Event listener for password input
passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const strength = calculateStrength(password); // Calculate password strength
  updateStrengthMeter(strength); // Update the meter and text
});

// Function to calculate password strength
function calculateStrength(password) {
  let strength = 0;

  // Add points based on password criteria
  if (password.length >= 8) strength++; // At least 8 characters
  if (/[a-z]/.test(password)) strength++; // Lowercase letter
  if (/[A-Z]/.test(password)) strength++; // Uppercase letter
  if (/\d/.test(password)) strength++; // Digit
  if (/[@$!%*?&#]/.test(password)) strength++; // Special character

  return strength;
}

// Function to update the strength meter and text
function updateStrengthMeter(strength) {
  let width = "0%";
  let color = "red";
  let text = "Weak";

  switch (strength) {
    case 1:
    case 2:
      width = "25%";
      color = "red";
      text = "Weak";
      break;
    case 3:
      width = "50%";
      color = "orange";
      text = "Medium";
      break;
    case 4:
      width = "75%";
      color = "yellowgreen";
      text = "Strong";
      break;
    case 5:
      width = "100%";
      color = "green";
      text = "Very Strong";
      break;
  }

  // Update the strength bar and text
  strengthBar.style.width = width;
  strengthBar.style.backgroundColor = color;
  strengthText.textContent = text;
  strengthText.style.color = color;
}

