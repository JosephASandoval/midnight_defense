const globals = require("./globals");
import { collisionDetection } from "./collision_detection";
import { canvas, weapons, villains } from "../index";

export function handleWeapons() {
  for (let i = 0; i < weapons.length; i++) {
    weapons[i].update();
    weapons[i].draw();

    for (let j = 0; j < villains.length; j++) {
      if (
        villains[j] &&
        weapons[i] &&
        collisionDetection(weapons[i], villains[j])
      ) {
        villains[j].health -= weapons[i].power;
        weapons.splice(i, 1);
        i--;
      }
    }

    if (weapons[i] && weapons[i].x > canvas.width - globals.blockSize) {
      weapons.splice(i, 1);
      i--;
    }
  }
}
