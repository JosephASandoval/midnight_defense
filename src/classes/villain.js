const globals = require("../util/globals");
import Fire from "./fire";
import { canvas, c, fires, dragonAttack, gargoyleAttack } from "../index";
import dragonImg from "../assets/images/dragon.png";
import gargoyleImg from "../assets/images/gargoyle.png";
import barbarianImg from "../assets/images/barbarian.png";

const villainTypes = [];
const dragon = new Image();
dragon.src = dragonImg;
villainTypes.push(dragon);
const gargoyle = new Image();
gargoyle.src = gargoyleImg;
villainTypes.push(gargoyle);
const barbarian = new Image();
barbarian.src = barbarianImg;
villainTypes.push(barbarian);

export default class Villain {
  constructor(verticalPosition) {
    this.x = canvas.width;
    this.y = verticalPosition;
    this.width = globals.blockSize - globals.blockGap * 2;
    this.height = globals.blockSize - globals.blockGap * 2;
    this.fireNow = false;
    this.timer = 0;
    this.fires = [];
    this.speed = Math.random() * 0.1 + 0.5;
    this.movement = this.speed;
    this.health = 100;
    this.maxHealth = this.health;
    this.villainType =
      villainTypes[Math.floor(Math.random() * villainTypes.length)];
    this.frameX = 0;
    this.frameY = 0;
    if (this.villainType === dragon) {
      this.minFrame = 0;
      this.maxFrame = 11;
      this.spriteWidth = 82;
      this.spriteHeight = 82;
    } else if (this.villainType === gargoyle) {
      this.minFrame = 0;
      this.maxFrame = 11;
      this.spriteWidth = 74;
      this.spriteHeight = 74;
    } else if (this.villainType === barbarian) {
      this.minFrame = 0;
      this.maxFrame = 7;
      this.spriteWidth = 74;
      this.spriteHeight = 74;
    }
  }

  draw() {
    c.drawImage(
      this.villainType,
      this.frameX * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  update() {
    this.x -= this.movement;

    if (globals.frame % 20 === 0) {
      if (this.frameX < this.maxFrame) {
        this.frameX++;
      } else {
        this.frameX = this.minFrame;
      }

      if (this.villainType === dragon && this.frameX === 3) {
        this.fireNow = true;
      } else if (this.villainType === gargoyle && this.frameX === 1) {
        this.fireNow = true;
      }
    }

    if (this.fireNow) {
      if (this.villainType === dragon) {
        fires.push(new Fire(this.x, this.y + 30, 1));
        dragonAttack.play();
      } else if (this.villainType === gargoyle) {
        fires.push(new Fire(this.x, this.y + 30, 2));
        gargoyleAttack.play();
      }
      this.fireNow = false;
    }
  }
}
