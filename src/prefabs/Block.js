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

  getSpriteLocation() {
    const spriteX = this.x * config.BLOCK_SIDE_LENGTH;
    const spriteY = this.y * config.BLOCK_SIDE_LENGTH;

    return {
      x: spriteX,
      y: spriteY,
    };
  }
}
