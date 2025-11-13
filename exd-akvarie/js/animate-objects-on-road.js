"use strict";

// funktion der afspiller lyd når boble klikkes og tilføjer pop animation
function handleBubbleClick(event) {
  const bubbleSound = new Audio("sound/bubble-pop.mp3"); //ændrer lydfil til boblelyd
  bubbleSound.play();
}

// venter med at hente js siden tilden hele html er loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add click handlers to all bubbles
  document.querySelectorAll(".bubble").forEach((bubble) => {
    bubble.addEventListener("click", handleBubbleClick);
  });
});

// lav den nu med skattekisten, når man klikker på den så skal der afspilles en lyd af skattekisten der åbnes, med skattekiste-sounden
function handleSkattekisteClick(event) {
  const skattekisteSound = new Audio("sound/skattekiste-sound.mp3");
  skattekisteSound.play();
}

// venter med at hente js siden tilden hele html er loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add click handler to skattekiste
  const skattekiste = document.getElementById("skattekiste");
  skattekiste.addEventListener("click", handleSkattekisteClick);
});

function playBtnClick(event) {
  const playBtnSound = new Audio("sound/eating-chips.mp3");
  playBtnSound.play();
}

document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.getElementById("play-button");
  playBtn.addEventListener("click", playBtnClick);
});

function piratClick(event) {
  const piratSound = new Audio("sound/wooden-ship-break.mp3");
  piratSound.play();
}

document.addEventListener("DOMContentLoaded", () => {
  const piratskib = document.getElementById("piratskib");
  piratskib.addEventListener("click", piratClick);
});

function faktaBtn(event) {
  const piratSound = new Audio("sound/wooden-ship-break.mp3");
  piratSound.play();
}

document.addEventListener("DOMContentLoaded", () => {
  const piratskib = document.getElementById("piratskib");
  piratskib.addEventListener("click", piratClick);
});

// Tilføj event listener til knappen for at navigere til spil siden
document.getElementById("play-button").addEventListener("click", function () {
  window.location.href = "../exd-spil/index.html";
});

// Tilføj event listener til knappen for at navigere til fakta siden
document.getElementById("fish-button").addEventListener("click", function () {
  window.location.href = "../exd-facts/facts-side.html";
});

const fishInfo = [
  {
    fishName: "Oliver",
    fishColor: "blue",
    fishAge: 4,
  },
  {
    fishName: "Tenna",
    fishColor: "yellow",
    fishAge: 5,
  },
  {
    fishName: "Martin",
    fishColor: "green",
    fishAge: 6,
  },
  {
    fishName: "Freja",
    fishColor: "orange og hvid",
    fishAge: 4,
  },
];
