const globals = require("../util/globals");
import { c } from "../index";
import fireballImg from "../assets/images/fireball.png";
import iceballImg from "../assets/images/iceball.png";

const fireball = new Image();
fireball.src = fireballImg;
const iceball = new Image();
iceball.src = iceballImg;

export default class Fire {
  constructor(x, y, fireType) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.power = 20;
    this.speed = 5;
    this.frameX = 0;
    this.frameY = 0;
    this.fireType = fireType;
    if (this.fireType === 1) {
      this.minFrame = 0;
      this.maxFrame = 2;
      this.spriteWidth = 34;
      this.spriteHeight = 34;
    } else if (this.fireType === 2) {
      this.minFrame = 0;
      this.maxFrame = 1;
      this.spriteWidth = 34;
      this.spriteHeight = 34;
    }
  }

  update() {
    this.x -= this.speed;
    if (globals.frame % 10 === 0) {
      if (this.frameX < this.maxFrame) {
        this.frameX++;
      } else {
        this.frameX = this.minFrame;
      }
    }
  }

  draw() {
    if (this.fireType === 1) {
      c.drawImage(
        fireball,
        this.frameX * this.spriteWidth,
        0,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
        this.width * 4,
        this.height * 4
      );
    } else if (this.fireType === 2) {
      c.drawImage(
        iceball,
        this.frameX * this.spriteWidth,
        0,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
        this.width * 4,
        this.height * 4
      );
    }
  }
}

