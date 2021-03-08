const globals = require("./globals");
import Token from "../classes/token";
import Notification from "../classes/notification";
import { mouse, tokens, notifications, coinSound } from "../index";
import { collisionDetection } from "./collision_detection";

export function handleTokens() {
  if (globals.frame % 400 === 0) {
    tokens.push(new Token());
  }

  for (let i = 0; i < tokens.length; i++) {
    tokens[i].draw();
    tokens[i].update();

    if (
      tokens[i] &&
      mouse.x &&
      mouse.y &&
      collisionDetection(tokens[i], mouse)
    ) {
      globals.numberOfTokens += tokens[i].amount;
      notifications.push(
        new Notification("+" + tokens[i].amount, 836, 60, 30, "gold")
      );
      coinSound.play();
      tokens.splice(i, 1);
      i--;
    }
  }
}
