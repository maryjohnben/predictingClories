// js/main.js
import { initAuth } from "./profile.js";
import { initGame } from "./game.js";

console.log("main.js loaded");
alert("main.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  initAuth();
  initGame();
});
