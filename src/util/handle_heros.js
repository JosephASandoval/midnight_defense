import { collisionDetection } from "./collision_detection";
import { villainPositions, villains, heros } from "../index";

export function handleHeros() {
  for (let i = 0; i < heros.length; i++) {
    heros[i].draw();
    heros[i].update();

    if (villainPositions.indexOf(heros[i].y) !== -1) {
      heros[i].hitting = true;
    } else {
      heros[i].hitting = false;
    }

    for (let j = 0; j < villains.length; j++) {
      if (heros[i] && collisionDetection(heros[i], villains[j])) {
        villains[j].movement = 0;
        heros[i].health -= 1;
      }

      if (heros[i] && heros[i].health <= 0) {
        heros.splice(i, 1);
        i--;
        villains[j].movement = villains[j].speed;
      }
    }
  }
}
