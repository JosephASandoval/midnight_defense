const globals = require("../util/globals");
import { mouse, c } from "../index";
import { collisionDetection } from "../util/collision_detection";

export default class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = globals.blockSize;
    this.height = globals.blockSize;
  }

  draw() {
    if (mouse.x && mouse.y && collisionDetection(this, mouse)) {
      c.fillStyle = "rgba(255, 255, 255, 0.05)";
      c.fillRect(this.x, this.y, this.width, this.height);
    }
  }
}
