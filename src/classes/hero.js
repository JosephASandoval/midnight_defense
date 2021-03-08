const globals = require("../util/globals");
import Weapon from "./weapon";
import {
  c,
  weapons,
  goblinAttack,
  wizardAttack,
  soldierAttack,
} from "../index";
import wizardImg from "../assets/images/wizard.png";
import goblinImg from "../assets/images/goblin.png";
import soldierImg from "../assets/images/soldier.png";
import princessImg from "../assets/images/princess.png";

export const wizard = new Image();
wizard.src = wizardImg;
export const goblin = new Image();
goblin.src = goblinImg;
export const soldier = new Image();
soldier.src = soldierImg;
export const princess = new Image();
princess.src = princessImg;

export default class Hero {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = globals.blockSize - globals.blockGap * 2;
    this.height = globals.blockSize - globals.blockGap * 2;
    this.hitting = false;
    this.health = 100;
    this.weapons = [];
    this.hitNow = false;
    this.frameX = 0;
    this.frameY = 0;
    this.minFrame = 0;
    this.maxFrame = 5;
    this.selectedHero = globals.selectedHero;
    if (this.selectedHero === 1 || this.selectedHero === 2) {
      this.spriteWidth = 64;
      this.spriteHeight = 64;
    } else if (this.selectedHero === 3 || this.selectedHero === 4) {
      this.spriteWidth = 72;
      this.spriteHeight = 72;
    }
  }

  draw() {
    if (this.selectedHero === 1) {
      c.drawImage(
        wizard,
        this.frameX * this.spriteWidth,
        0,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
        this.width,
        this.height
      );
    } else if (this.selectedHero === 2) {
      c.drawImage(
        goblin,
        this.frameX * this.spriteWidth,
        0,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
        this.width,
        this.height
      );
    } else if (this.selectedHero === 3) {
      c.drawImage(
        soldier,
        this.frameX * this.spriteWidth,
        0,
        this.spriteWidth,
        this.spriteHeight,
        this.x - 5,
        this.y,
        this.width,
        this.height
      );
    } else if (this.selectedHero === 4) {
      c.drawImage(
        princess,
        this.frameX * this.spriteWidth,
        0,
        this.spriteWidth,
        this.spriteHeight,
        this.x - 10,
        this.y + 10,
        this.width,
        this.height
      );
    }
  }

  update() {
    if (globals.frame % 20 === 0) {
      if (this.frameX < this.maxFrame) {
        this.frameX++;
      } else {
        this.frameX = this.minFrame;
      }

      if (this.frameX === 2) {
        this.hitNow = true;
      }
    }

    if (this.selectedHero === 1) {
      if (this.hitting) {
        this.minFrame = 0;
        this.maxFrame = 3;
      } else {
        this.minFrame = 4;
        this.maxFrame = 5;
      }
    } else if (
      this.selectedHero === 2 ||
      this.selectedHero === 3 ||
      this.selectedHero === 4
    ) {
      if (this.hitting) {
        this.minFrame = 0;
        this.maxFrame = 2;
      } else {
        this.minFrame = 3;
        this.maxFrame = 4;
      }
    }

    if (this.hitting && this.hitNow) {
      if (this.selectedHero === 1) {
        weapons.push(new Weapon(this.x + 70, this.y + 15, 1));
        wizardAttack.play();
      } else if (this.selectedHero === 2) {
        weapons.push(new Weapon(this.x + 70, this.y + 30, 2));
        goblinAttack.play();
      } else if (this.selectedHero === 3) {
        weapons.push(new Weapon(this.x + 70, this.y + 30, 3));
        soldierAttack.play();
      } else if (this.selectedHero === 4) {
        weapons.push(new Weapon(this.x + 70, this.y + 30, 4));
        soldierAttack.play();
      }
      this.hitNow = false;
    }
  }
}
