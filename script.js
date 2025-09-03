// ===========================
// Part 1: Event Handling
// ===========================

// CLICK EVENT
const clickBtn = document.getElementById("clickBtn");
const clickMessage = document.getElementById("clickMessage");

clickBtn.addEventListener("click", () => {
  clickMessage.textContent = "You clicked the button!";
});

// MOUSEOVER EVENT
const hoverBtn = document.getElementById("hoverBtn");
const hoverMessage = document.getElementById("hoverMessage");

hoverBtn.addEventListener("mouseover", () => {
  hoverMessage.textContent = "Mouse is over the button!";
});

hoverBtn.addEventListener("mouseout", () => {
  hoverMessage.textContent = "";
});

// KEYBOARD INPUT EVENT
const keyboardInput = document.getElementById("keyboardInput");
const keyboardMessage = document.getElementById("keyboardMessage");

keyboardInput.addEventListener("keydown", (event) => {
  keyboardMessage.textContent = `You pressed: ${event.key}`;
});
keyboardInput.addEventListener("keyup", () => {
  keyboardMessage.textContent = `Current value: ${keyboardInput.value}`;
});

// ===========================
// Part 2: Interactive Elements
// ===========================

// Light/Dark mode toggle
const toggleModeBtn = document.getElementById("toggleMode");
toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const countDisplay = document.getElementById("count");

let count = 0;

increaseBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

// FAQ Section
const faqBtn = document.getElementById("faqBtn");
const faqAnswer = document.getElementById("faqAnswer");

faqBtn.addEventListener("click", () => {
  faqAnswer.classList.toggle("hidden");
});

// ===========================
// Part 3: Form Validation
// ===========================

const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop form from refreshing the page

  let valid = true;

  // Validate Name (must not be empty)
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate Email (must contain @ and .)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Password (min 6 characters)
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Final message
  if (valid) {
    formMessage.textContent = "✅ Form submitted successfully!";
    formMessage.style.color = "green";
  } else {
    formMessage.textContent = "❌ Please fix the errors above.";
    formMessage.style.color = "red";
  }
});
