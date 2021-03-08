const globals = require("./globals");
import { c, scoreEl, villains } from "../index";

export function handleScore() {
  c.fillStyle = "gold";
  c.font = "50px MedievalSharp";
  c.fillText("Midnight Defense", 330, 50);
  c.fillStyle = "silver";
  c.font = "30px MedievalSharp";
  c.fillText("Tokens: " + globals.numberOfTokens, 720, 90);

  scoreEl.innerHTML = globals.score;

  if (globals.score >= globals.winningScore && villains.length === 0) {
    globals.gameOver = true;
  }
}
