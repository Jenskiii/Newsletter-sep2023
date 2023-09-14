const form = document.getElementById("form");
const email = document.getElementById("email");
const forgroup = document.querySelector("form-group")


form.addEventListener("submit",(e) => {
    e.preventDefault();
   console.log(e)

    validateInputs();
  });

//  shows error if validation is false
function setError(input, message) {
  const formGroup = input.parentElement;
  const errorDisplay = formGroup.querySelector("small");
  console.log(formGroup)
  errorDisplay.innerText = message;
  formGroup.classList.add("error");
}

//  removes errror if validation is true
function setSucces(input) {
  const formGroup = input.parentElement;
  const errorDisplay = formGroup.querySelector("small");
  console.log(formGroup)
  errorDisplay.innerText = "";
  formGroup.classList.add("gay");
  formGroup.classList.remove("error");
}

// checks if valid email
function isValidEmail() {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

//  validates user input
function validateInputs() {
  // trim removes white spaces
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Valid email address required");
  } else {
    setSucces(email);
  }
}
