//  form
const form = document.getElementById("form");
const email = document.getElementById("email");
const forgroup = document.querySelector("form-group");
// cards
const mainCard = document.querySelector(".main-card");
const secondaryCard = document.querySelector(".secondary-card");
const dismissButton = document.querySelector(".dismiss");
//  goes back to main page on click
dismissButton.addEventListener("click", hideSecondaryCard);


// starts validation on submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopImmediatePropagation()
  validateInputs();
});

//  shows error if validation is false
const setError = (input, message) => {
  const formGroup = input.parentElement;
  const errorDisplay = formGroup.querySelector("small");

  errorDisplay.innerText = message;
  formGroup.classList.add("error");
}

//  removes errror if validation is true
const setSuccess = (input) => {
  const formGroup = input.parentElement;
  const errorDisplay = formGroup.querySelector("small");

  errorDisplay.innerText = "";
  formGroup.classList.remove("error");
}
//  checks if value is valid email
const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//  validates user input
const validateInputs = () => {
  // trim removes white spaces
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Invalid Email");
  } else {
    setSuccess(email);
    showSecondaryCard(emailValue);
    email.value = "";
  }
}

function showSecondaryCard(value) {
  // updates email on secondary card
  const showEmail = document.querySelector(".secondary-card__email");
  showEmail.innerText = value;

  // show secondary card / hide main
  secondaryCard.classList.remove("hidden");
  mainCard.classList.add("hidden");
}

// hide secondary card / show main
function hideSecondaryCard() {
  secondaryCard.classList.add("hidden");
  mainCard.classList.remove("hidden");
}
