const globals = require("./globals");
import { collisionDetection } from "./collision_detection";
import { fires, heros } from "../index";

export function handleFires() {
  for (let i = 0; i < fires.length; i++) {
    fires[i].update();
    fires[i].draw();

    for (let j = 0; j < heros.length; j++) {
      if (heros[j] && fires[i] && collisionDetection(fires[i], heros[j])) {
        heros[j].health -= fires[i].power;
        fires.splice(i, 1);
        i--;
      }
    }

    if (fires[i] && fires[i].x < 1) {
      fires.splice(i, 1);
      i--;
    }
  }
}
