const globals = require("../util/globals");
import { c } from "../index";
import arrow1Img from "../assets/images/arrow1.png";
import arrow2Img from "../assets/images/arrow2.png";
import swooshImg from "../assets/images/swoosh.png";

const arrow1 = new Image();
arrow1.src = arrow1Img;
const arrow2 = new Image();
arrow2.src = arrow2Img;
const swoosh = new Image();
swoosh.src = swooshImg;

export default class Weapon {
  constructor(x, y, weaponType) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.power = 20;
    this.speed = 5;
    this.frameX = 0;
    this.frameY = 0;
    this.weaponType = weaponType;
    if (this.weaponType === 1 || this.weaponType === 2) {
      this.minFrame = 0;
      this.maxFrame = 0;
      this.spriteWidth = 34;
      this.spriteHeight = 34;
    } else if (this.weaponType === 3 || this.weaponType === 4) {
      this.minFrame = 0;
      this.maxFrame = 1;
      this.spriteWidth = 34;
      this.spriteHeight = 34;
    }
  }

  update() {
    this.x += this.speed;
    if (globals.frame % 10 === 0) {
      if (this.frameX < this.maxFrame) {
        this.frameX++;
      } else {
        this.frameX = this.minFrame;
      }
    }
  }

  draw() {
    if (this.weaponType === 1) {
      c.drawImage(
        arrow1,
        this.frameX * this.spriteWidth,
        0,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
        this.width * 4,
        this.height * 4
      );
    } else if (this.weaponType === 2) {
      c.drawImage(
        arrow2,
        this.frameX * this.spriteWidth,
        0,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
        this.width * 4,
        this.height * 4
      );
    } else if (this.weaponType === 3) {
      c.drawImage(
        swoosh,
        this.frameX * this.spriteWidth,
        0,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
        this.width * 4,
        this.height * 4
      );
    } else if (this.weaponType === 4) {
      c.drawImage(
        swoosh,
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

