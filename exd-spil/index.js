"use strict";

const dodger = document.getElementById("dodger");
const game = document.getElementById("game");
const dodgerWidth = 100;
const dodgerHeight = 100;

dodger.style.left = "625px"; // Start i midten horisontalt
dodger.style.bottom = "400px"; // Start i midten vertikalt

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }

  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }

  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
  console.log(e.key); // Viser hvilken tast der er trykket
});

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 30}px`;
    dodger.style.transform = "scaleX(-1)"; // Vend billedet horisontalt
    playSoundOnMovement();
  } else {
    playSoundOnGameOver();
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  const gameWidth = game.offsetWidth; // Få bredden af spilområdet

  if (left < gameWidth - dodgerWidth) { // Sørg for at dodger ikke går ud af højre kant
    dodger.style.left = `${left + 30}px`;
    dodger.style.transform = "scaleX(+1)"; // Vend billedet horisontalt
    playSoundOnMovement();
  } else {
    playSoundOnGameOver();
  }
}

function moveDodgerUp() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);
  const gameHeight = game.offsetHeight;

  if (bottom < gameHeight - dodgerHeight) { // Sørg for at dodger ikke går ud af toppen
    dodger.style.bottom = `${bottom + 30}px`;
    dodger.style.transform = "rotate(-90deg)"; // rotér billedet vertikalt
    playSoundOnMovement();
  } else {
    playSoundOnGameOver();
  }
}

function moveDodgerDown() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 30}px`;
    dodger.style.transform = "rotate(90deg)"; // rotér billedet vertikalt
    playSoundOnMovement();
  } else {
    playSoundOnGameOver();
  }
}

// Afspiller lyd ved bevægelse
const moveSound = document.getElementById("movementSound");

function playSoundOnMovement() {
  moveSound.currentTime = 0;
  moveSound.play();
}

// Afspiller lyd ved kollation med væg
const gameoverSound = document.getElementById("gameoverSound");

function playSoundOnGameOver() {
  gameoverSound.currentTime = 0;
  gameoverSound.play();
}

// Tilføj event listener til knappen for at navigere tilbage start siden
document.getElementById("tilbage").addEventListener("click", function () {
  window.location.href = "../exd-akvarie/index.html";
});