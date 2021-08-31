const globals = require("./globals");
import Villain from "../classes/villain";
import Notification from "../classes/notification";
import { notifications, villains, villainPositions } from "../index";

const messages = ["Nice Shot", "Great Hit", "Destroyed"];

export function handleVillains() {
  for (let i = 0; i < villains.length; i++) {
    villains[i].update();
    villains[i].draw();

    if (villains[i].x < 0) {
      globals.gameOver = true;
    }

    if (villains[i].health <= 0) {
      let gainedTokens = villains[i].maxHealth / 10;
      notifications.push(
        new Notification(
          messages[Math.floor(Math.random() * messages.length)],
          villains[i].x,
          villains[i].y,
          30,
          "silver"
        )
      );
      globals.numberOfTokens += gainedTokens;
      globals.score += gainedTokens;
      const findThisIndex = villainPositions.indexOf(villains[i].y);
      villainPositions.splice(findThisIndex, 1);
      villains.splice(i, 1);
      i--;
    }
  }

  if (
    globals.frame % globals.villainsInterval === 0 &&
    globals.score < globals.winningScore
  ) {
    let verticalPosition =
      Math.floor(Math.random() * 5 + 1) * globals.blockSize + globals.blockGap;
    villains.push(new Villain(verticalPosition));
    villainPositions.push(verticalPosition);

    if (globals.villainsInterval > 100) {
      globals.villainsInterval -= 20;
    }
  }
}

