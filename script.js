document.querySelectorAll("#year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const planButtons = document.querySelectorAll(".plan-button");
const planMessage = document.getElementById("planMessage");

planButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const plan = button.dataset.plan;
    if (planMessage) {
      planMessage.textContent =
        `You selected ${plan}. This is a demonstration website, so no payment has been taken.`;
    }
  });
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (formMessage) {
      formMessage.textContent =
        "Thank you. Your message has been received as part of this website demonstration.";
    }
    contactForm.reset();
  });
}
