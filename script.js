const moodMessages = {
  great:
    "Some days, growth feels natural. Even when you are already thriving, a little water and sunlight still matter. Caring for yourself is not only something you do when you are struggling.",
  okay:
    "Not every day needs to feel extraordinary. Sometimes growth happens quietly, through small amounts of care repeated over time. Being okay can be enough for today.",
  sad:
    "A wilted plant does not need to be judged for needing more water. Some days simply ask for more care, more warmth, and more time. Needing more does not mean growing less.",
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
let isComplete = false;

function resetExperience() {
  selectedMood = "";
  isComplete = false;

  garden.classList.remove(
    "mood-great",
    "mood-okay",
    "mood-sad",
    "receiving-care"
  );

  moodButtons.forEach(function (button) {
    button.classList.remove("selected");
    button.setAttribute("aria-pressed", "false");
    button.disabled = false;
  });

  supportiveMessage.textContent = "";
  waterButton.textContent = "Water my seed";
  waterButton.disabled = true;
}

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
  if (isComplete) {
    resetExperience();
    return;
  }

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
    waterButton.textContent = "Check in again";
    waterButton.disabled = false;
    isComplete = true;
  }, careDurations[moodToCareFor]);
});
