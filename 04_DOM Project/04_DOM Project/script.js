const allcards = document.querySelectorAll(".clash-card__unit-stats");
const card1 = document.querySelector(
  ".clash-card__unit-stats--barbarian"
);
const card2 = document.querySelector(
  ".clash-card__unit-stats--archer"
);
const card3 = document.querySelector(".clash-card__unit-stats--giant");
const card4 = document.querySelector(
  ".clash-card__unit-stats--goblin"
);
const card5 = document.querySelector(
  ".clash-card__unit-stats--wizard"
);

// Setting all stats text color to white
for (let stats of allcards) {
  stats.style.color = "#fff";
}
const costTexts = document.querySelectorAll(
  ".clash-card__unit-stats .no-border"
);
for (let cost of costTexts) {
  cost.style.color = "#fff";
}

// changing unit stats bgc
card1.style.backgroundColor = "#ec9b3b";
card2.style.backgroundColor = "#ee5487";
card3.style.backgroundColor = "#f6901a";
card4.style.backgroundColor = "#82bb30";
card5.style.backgroundColor = "#4facff";