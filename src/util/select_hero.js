const globals = require("./globals");
import { collisionDetection } from "./collision_detection";
import { mouse, c } from "../index";
import { wizard, goblin, soldier, princess } from "../classes/hero";

const wizardIcon = {
  x: 10,
  y: 10,
  width: 70,
  height: 85,
};

const goblinIcon = {
  x: 90,
  y: 10,
  width: 70,
  height: 85,
};

const soldierIcon = {
  x: 170,
  y: 10,
  width: 70,
  height: 85,
};

const princessIcon = {
  x: 250,
  y: 10,
  width: 70,
  height: 85,
};

export function selectHero() {
  let wizardIconFill = "black";
  let goblinIconFill = "black";
  let soldierIconFill = "black";
  let princessIconFill = "black";

  if (collisionDetection(mouse, wizardIcon) && mouse.clicked) {
    globals.selectedHero = 1;
  } else if (collisionDetection(mouse, goblinIcon) && mouse.clicked) {
    globals.selectedHero = 2;
  } else if (collisionDetection(mouse, soldierIcon) && mouse.clicked) {
    globals.selectedHero = 3;
  } else if (collisionDetection(mouse, princessIcon) && mouse.clicked) {
    globals.selectedHero = 4;
  }

  if (globals.selectedHero === 1) {
    wizardIconFill = "rgba(255, 255, 255, 0.05)";
    goblinIconFill = "rgba(255, 255, 255, 0.001)";
    soldierIconFill = "rgba(255, 255, 255, 0.001)";
    princessIconFill = "rgba(255, 255, 255, 0.001)";
  } else if (globals.selectedHero === 2) {
    wizardIconFill = "rgba(255, 255, 255, 0.001)";
    goblinIconFill = "rgba(255, 255, 255, 0.05)";
    soldierIconFill = "rgba(255, 255, 255, 0.001)";
    princessIconFill = "rgba(255, 255, 255, 0.001)";
  } else if (globals.selectedHero === 3) {
    wizardIconFill = "rgba(255, 255, 255, 0.001)";
    goblinIconFill = "rgba(255, 255, 255, 0.001)";
    soldierIconFill = "rgba(255, 255, 255, 0.05)";
    princessIconFill = "rgba(255, 255, 255, 0.001)";
  } else if (globals.selectedHero === 4) {
    wizardIconFill = "rgba(255, 255, 255, 0.001)";
    goblinIconFill = "rgba(255, 255, 255, 0.001)";
    soldierIconFill = "rgba(255, 255, 255, 0.001)";
    princessIconFill = "rgba(255, 255, 255, 0.05)";
  } else {
    wizardIconFill = "rgba(255, 255, 255, 0.001)";
    goblinIconFill = "rgba(255, 255, 255, 0.001)";
    soldierIconFill = "rgba(255, 255, 255, 0.001)";
    princessIconFill = "rgba(255, 255, 255, 0.001)";
  }

  c.fillStyle = wizardIconFill;
  c.fillRect(wizardIcon.x, wizardIcon.y, wizardIcon.width, wizardIcon.height);
  c.drawImage(wizard, 64 * 4, 0, 64, 64, -20, 5, 64 * 1.5, 64 * 1.5);
  c.fillStyle = goblinIconFill;
  c.fillRect(goblinIcon.x, goblinIcon.y, goblinIcon.width, goblinIcon.height);
  c.drawImage(goblin, 64 * 3, 0, 64, 64, 65, 5, 64 * 1.5, 64 * 1.5);
  c.fillStyle = soldierIconFill;
  c.fillRect(
    soldierIcon.x,
    soldierIcon.y,
    soldierIcon.width,
    soldierIcon.height
  );
  c.drawImage(soldier, 72 * 3, 0, 72, 72, 140, 0, 72 * 1.5, 72 * 1.5);
  c.fillStyle = princessIconFill;
  c.fillRect(
    princessIcon.x,
    princessIcon.y,
    princessIcon.width,
    princessIcon.height
  );
  c.drawImage(princess, 72 * 3, 0, 72, 72, 220, 0, 72 * 1.5, 72 * 1.5);
}
