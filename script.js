// Auto year
document.getElementById("year").textContent = new Date().getFullYear();

// Dark mode toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeBtn.textContent = "Dark Mode";
  } else {
    themeBtn.textContent = "Light Mode";
  }
});

// Show phone number
const showPhoneBtn = document.getElementById("showPhoneBtn");
const phoneNumber = document.getElementById("phoneNumber");

showPhoneBtn.addEventListener("click", () => {
  phoneNumber.style.display = "inline";
  showPhoneBtn.style.display = "none";
});

// Contact form
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  formStatus.textContent = "Message sent successfully! (Demo Mode)";
  contactForm.reset();
});
