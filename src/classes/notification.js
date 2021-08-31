import { c } from "../index";

export default class Notification {
  constructor(value, x, y, size, color) {
    this.value = value;
    this.x = x;
    this.y = y;
    this.size = size;
    this.duration = 0;
    this.color = color;
    this.opacity = 1;
  }

  update() {
    this.y -= 0.3;
    this.duration += 1;
    if (this.opacity > 0.03) {
      this.opacity -= 0.03;
    }
  }

  draw() {
    c.globalAlpha = this.opacity;
    c.fillStyle = this.color;
    c.font = this.size + "px MedievalSharp";
    c.fillText(this.value, this.x, this.y);
    c.globalAlpha = 1;
  }
}

