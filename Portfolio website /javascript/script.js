
function validateForm() {
    let valid = true;

    // Get form fields
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    // Get error message elements
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Check if email is empty
    if (email.value === "") {
      emailError.classList.add("show-error");
      valid = false;
    } else {
      emailError.classList.remove("show-error");
    }

    // Check if password is empty
    if (password.value === "") {
      passwordError.classList.add("show-error");
      valid = false;
    } else {
      passwordError.classList.remove("show-error");
    }

    return valid;
  }
