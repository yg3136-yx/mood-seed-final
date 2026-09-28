const moodMessages = {
  great: "Keep growing with this energy.",
  okay: "A little care still helps you grow.",
  sad: "You deserve care today.",
  stressed: "Take it one moment at a time.",
};

const moodButtons = document.querySelectorAll(".mood-button");
const waterButton = document.querySelector(".water-button");
const waterDrops = document.querySelector(".water-drops");
const plant = document.querySelector(".plant");
const supportiveMessage = document.querySelector(".supportive-message");

let selectedMood = "";

moodButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    moodButtons.forEach(function (moodButton) {
      moodButton.classList.remove("selected");
      moodButton.setAttribute("aria-pressed", "false");
    });

    button.classList.add("selected");
    button.setAttribute("aria-pressed", "true");
    selectedMood = button.dataset.mood;
    waterButton.disabled = false;
  });
});

waterButton.addEventListener("click", function () {
  if (selectedMood === "") {
    return;
  }

  const moodToWater = selectedMood;

  waterButton.disabled = true;
  moodButtons.forEach(function (button) {
    button.disabled = true;
  });
  waterDrops.classList.add("falling");
  supportiveMessage.textContent = "";

  setTimeout(function () {
    plant.classList.add("grown");
    supportiveMessage.textContent = moodMessages[moodToWater];
  }, 900);
});
