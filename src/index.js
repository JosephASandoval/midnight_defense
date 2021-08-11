const globals = require("./util/globals");
import Block from "./classes/block";
import Hero from "./classes/hero";
import Notification from "./classes/notification";
import { handleGrid, grid } from "./util/handle_grid";
import { handleHeros } from "./util/handle_heros";
import { handleTokens } from "./util/handle_tokens";
import { handleWeapons } from "./util/handle_weapons";
import { handleFires } from "./util/handle_fires";
import { handleVillains } from "./util/handle_villains";
import { handleScore } from "./util/handle_score";
import { handleNotifications } from "./util/handle_notifications";
import { selectHero } from "./util/select_hero";

// arrays
export let tokens = [];
export let weapons = [];
export let fires = [];
export let notifications = [];
export let villains = [];
export let villainPositions = [];
export let heros = [];

// setup canvas
export const canvas = document.getElementById("canvas");
export const c = canvas.getContext("2d");
canvas.width = 900;
canvas.height = 600;

// audio obtained from https://www.bensound.com
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
let count = 0;

// sound effects obtained from https://www.zapsplat.com
export const goblinAttack = document.getElementById("goblinAttack");
export const wizardAttack = document.getElementById("wizardAttack");
export const soldierAttack = document.getElementById("soldierAttack");
export const dragonAttack = document.getElementById("dragonAttack");
export const gargoyleAttack = document.getElementById("gargoyleAttack");
export const coinSound = document.getElementById("coinSound");

// setup modal
export const scoreEl = document.querySelector("#scoreEl");
const startGameBtn = document.querySelector("#startGameBtn");
const modalEl = document.querySelector("#modalEl");
const bigScoreEl = document.querySelector("#bigScoreEl");

// reset game function
function init() {
  globals.numberOfTokens = 500;
  globals.score = 0;
  globals.gameOver = false;
  globals.blockSize = 100;
  globals.blockGap = 3;
  globals.frame = 0;
  globals.winningScore = 100;
  globals.villainsInterval = 500;
  globals.selectedHero = 1;

  scoreEl.innerHTML = globals.score;
  bigScoreEl.innerHTML = globals.score;
  tokens = [];
  weapons = [];
  fires = [];
  notifications = [];
  villains = [];
  villainPositions = [];
  heros = [];
}

// event listeners for mouse movement
export const mouse = {
  x: 10,
  y: 10,
  width: 0.1,
  height: 0.1,
  clicked: false,
};

canvas.addEventListener("mousedown", function () {
  mouse.clicked = true;
});

canvas.addEventListener("mouseup", function () {
  mouse.clicked = false;
});

let canvasPosition = canvas.getBoundingClientRect();

canvas.addEventListener("mousemove", function (e) {
  mouse.x = e.x - canvasPosition.left;
  mouse.y = e.y - canvasPosition.top;
});

canvas.addEventListener("mouseleave", function () {
  mouse.x = undefined;
  mouse.y = undefined;
});

// function that creates the grid
function createGrid() {
  for (let y = globals.blockSize; y < canvas.height; y += globals.blockSize) {
    for (let x = 0; x < canvas.width; x += globals.blockSize) {
      grid.push(new Block(x, y));
    }
  }
}

createGrid();

// event listener that allows us to place new hero on click
canvas.addEventListener("click", function () {
  const gridPositionX =
    mouse.x - (mouse.x % globals.blockSize) + globals.blockGap;
  const gridPositionY =
    mouse.y - (mouse.y % globals.blockSize) + globals.blockGap;

  if (gridPositionY < globals.blockSize) return;

  for (let i = 0; i < heros.length; i++) {
    if (heros[i].x === gridPositionX && heros[i].y === gridPositionY) return;
  }

  let heroCost = 100;

  if (globals.numberOfTokens >= heroCost) {
    heros.push(new Hero(gridPositionX, gridPositionY));
    globals.numberOfTokens -= heroCost;
  } else {
    notifications.push(
      new Notification("need more tokens", mouse.x, mouse.y, 20, "silver")
    );
  }
});

// function that runs the animation

let animationId;

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  handleGrid();
  handleHeros();
  handleTokens();
  handleWeapons();
  handleVillains();
  handleFires();
  selectHero();
  handleScore();
  handleNotifications();
  globals.frame++;
  animationId = requestAnimationFrame(animate);
  if (globals.gameOver) {
    cancelAnimationFrame(animationId);
    modalEl.style.display = "flex";
    bigScoreEl.innerHTML = globals.score;
    audio.pause();
    playPauseBtn.innerHTML = "Play Music &#9654;";
  }
}

startGameBtn.addEventListener("click", function () {
  init();
  animate();
  modalEl.style.display = "none";
  audio.play();
  playPauseBtn.innerHTML = "Pause Music &#10074;&#10074;";
});

// Fixes window resizing issues
window.addEventListener("resize", function () {
  canvasPosition = canvas.getBoundingClientRect();
});

// audio
function playPause() {
  if (count === 0) {
    count = 1;
    audio.play();
    playPauseBtn.innerHTML = "Pause Music &#10074;&#10074;";
  } else {
    count = 0;
    audio.pause();
    playPauseBtn.innerHTML = "Play Music &#9654;";
  }
}

playPauseBtn.addEventListener("click", function () {
  playPause();
});

