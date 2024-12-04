// Check if password and re-password is match or not ?
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("c-password");
const passwordError = document.getElementById("password-error");
const form = document.querySelector("form");

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


// Dynamic input border color base on the action of user on inputting (none/valid/invalid)
const inputs = document.querySelectorAll("input");

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
