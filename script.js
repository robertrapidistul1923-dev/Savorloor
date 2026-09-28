const tips = [
  "Check your fridge before shopping so you do not buy duplicates.",
  "Move food that needs using soon to the front of the fridge.",
  "Freeze bread if you will not finish it before it goes stale.",
  "Use soft vegetables in soups, sauces or pasta dishes.",
  "Plan one leftover meal each week.",
  "Store fruit and vegetables correctly to help them last longer."
];

const tipButton = document.getElementById("tipButton");
const randomTip = document.getElementById("randomTip");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

tipButton.addEventListener("click", () => {
  const tip = tips[Math.floor(Math.random() * tips.length)];
  randomTip.textContent = tip;
});
