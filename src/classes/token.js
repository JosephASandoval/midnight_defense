const globals = require("../util/globals");
import { canvas, c } from "../index";
import coinImg from "../assets/images/coin.png";
import treasureImg from "../assets/images/treasure.png";

const amounts = [25, 50, 100];
const tokenTypes = [];
const coin = new Image();
coin.src = coinImg;
tokenTypes.push(coin);
const treasure = new Image();
treasure.src = treasureImg;
tokenTypes.push(treasure);

export default class Token {
  constructor() {
    this.x = Math.random() * (canvas.width - globals.blockSize);
    this.y = (Math.floor(Math.random() * 5) + 1) * globals.blockSize + 25;
    this.width = globals.blockSize * 0.6;
    this.height = globals.blockSize * 0.6;
    this.amount = amounts[Math.floor(Math.random() * amounts.length)];
    this.tokenType = tokenTypes[Math.floor(Math.random() * tokenTypes.length)];
    this.frameX = 0;
    this.frameY = 0;
    if (this.tokenType === coin) {
      this.minFrame = 0;
      this.maxFrame = 3;
      this.spriteWidth = 34;
      this.spriteHeight = 34;
    } else if (this.tokenType === treasure) {
      this.minFrame = 0;
      this.maxFrame = 4;
      this.spriteWidth = 34;
      this.spriteHeight = 34;
    }
  }

  update() {
    if (globals.frame % 10 === 0) {
      if (this.frameX < this.maxFrame) {
        this.frameX++;
      } else {
        this.frameX = this.minFrame;
      }
    }
  }

  draw() {
    c.drawImage(
      this.tokenType,
      this.frameX * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x + 9,
      this.y + 9,
      this.width / 1.5,
      this.height / 1.5
    );
  }
}

