import Phaser from 'phaser';
import config from '../config';


export default class Block {
  constructor() {
    this.x = null;
    this.y = null;
    this.color = null;
    this.sprite = null;
  }

  createBlock(newX, newY, newColor) {
    this.x = newX;
    this.y = newY;
    this.color = newColor;

    const spriteLocation = this.getSpriteLocation();

    this.sprite = window.Tetris.game.add.sprite(spriteLocation.x, spriteLocation.y, 'block', this.color);
  }

  clean() {
    this.x = null;
    this.y = null;
    this.color = null;
    this.sprite.destroy();
    this.sprite = null;
  }

  getSpriteLocation() {
    const spriteX = this.x * config.BLOCK_SIDE_LENGTH;
    const spriteY = this.y * config.BLOCK_SIDE_LENGTH;

    return {
      x: spriteX,
      y: spriteY,
    };
  }

  moveBlock(newX, newY) {
    this.x = newX;
    this.y = newY;

    const spriteLocation = this.getSpriteLocation();
    const duration = 55;
    const repeat = 0;
    const ease = Phaser.Easing.Quadratic.In;
    const autoStart = false;
    const delay = 0;
    const yoyo = false;

    this.tween = window.Tetris.game.add.tween(this.sprite)
    .to(spriteLocation, duration, ease, autoStart, delay, repeat, yoyo);
    this.tween.start();
  }
}
