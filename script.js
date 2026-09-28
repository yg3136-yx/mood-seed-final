const moodMessages = {
  great: "Keep growing with this energy.",
  okay: "A little care still helps you grow.",
  sad: "You deserve care today.",
};

const careDurations = {
  great: 1400,
  okay: 3000,
  sad: 5500,
};

const moodButtons = document.querySelectorAll(".mood-button");
const waterButton = document.querySelector(".water-button");
const garden = document.querySelector(".garden");
const supportiveMessage = document.querySelector(".supportive-message");

let selectedMood = "";

moodButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    moodButtons.forEach(function (moodButton) {
      moodButton.classList.remove("selected");
      moodButton.setAttribute("aria-pressed", "false");
    });

    garden.classList.remove("mood-great", "mood-okay", "mood-sad");

    selectedMood = button.dataset.mood;
    button.classList.add("selected");
    button.setAttribute("aria-pressed", "true");
    garden.classList.add("mood-" + selectedMood);
    waterButton.disabled = false;
  });
});

waterButton.addEventListener("click", function () {
  if (selectedMood === "") {
    return;
  }

  const moodToCareFor = selectedMood;

  waterButton.disabled = true;
  moodButtons.forEach(function (button) {
    button.disabled = true;
  });

  supportiveMessage.textContent = "";
  garden.classList.add("receiving-care");

  setTimeout(function () {
    supportiveMessage.textContent = moodMessages[moodToCareFor];
  }, careDurations[moodToCareFor]);
});
