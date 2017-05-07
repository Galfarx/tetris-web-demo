import config from '../config';
import Block from './Block';

export default class Shape {
  constructor() {
    this.type = null;
    this.orientation = null;
    this.color = null;
    this.centerX = null;
    this.centerY = null;

    this.shape = null;
    this.blocks = [];

    this.isTweening = false;
    this.tweenCounter = 0;
  }

  createRandomShape() {
    this.type = Math.floor(Math.random() * config.NUMBER_OF_SHAPE_TYPES);
    this.orientation = Math.floor(Math.random() * config.NUMBER_OF_SHAPE_ORIENTATIONS);
    this.color = Math.floor(Math.random() * config.NUMBER_OF_COLORS);

    this.initBlocks();
  }

  initBlocks() {
    for (let i = 0; i < config.NUMBER_OF_BLOCKS_IN_SHAPE; i++) {
      this.blocks[i] = new Block();
    }
  }

  activate() {
    let newX;
    let newY;
    this.shape = window.Tetris.shapes[this.type];
    this.centerX = this.shape.orientation[this.orientation].startingLocation.x;
    this.centerY = this.shape.orientation[this.orientation].startingLocation.y;

    for (let i = 0; i < this.blocks.length; i++) {
      newX = this.centerX + this.shape.orientation[this.orientation].blockPosition[i].x;
      newY = this.centerY + this.shape.orientation[this.orientation].blockPosition[i].y;
      this.blocks[i].createBlock(newX, newY, this.color);
    }
  }

  clearActive() {
    this.type = null;
    this.orientation = null;
    this.color = null;
    this.centerX = null;
    this.centerY = null;
    this.blocks = null;
  }

  updateTween() {
    if (this.tweenCounter > 10) {
      this.isTweening = false;
      this.tweenCounter = 0;
    }
    this.tweenCounter++;
  }

  placeShapeInBoard() {
    let block;

    for (let i = 0; i < this.blocks.length; i++) {
      block = this.blocks[i];
      window.Tetris.board[block.y][block.x] = this.blocks[i];
    }
  }

  moveShape(direction) {
    if (!this.canMoveShape(direction)) {
      const msg = {
        msg: `Cannot move active shape in direction: ${direction}`,
      };
      throw msg;
    }

    let newX;
    let newY;

    for (let i = 0; i < this.blocks.length; i++) {
      switch (direction) {
        case config.MOVE_DOWN:
          newX = this.blocks[i].x;
          newY = this.blocks[i].y + 1;
          break;
        case config.MOVE_LEFT:
          newX = this.blocks[i].x - 1;
          newY = this.blocks[i].y;
          break;
        case config.MOVE_RIGHT:
          newX = this.blocks[i].x + 1;
          newY = this.blocks[i].y;
          break;
      }
      this.blocks[i].moveBlock(newX, newY);
    }

    switch (direction) {
      case config.MOVE_DOWN:
        this.centerX += 0;
        this.centerY += 1;
        break;
      case config.MOVE_LEFT:
        this.centerX += -1;
        this.centerY += 0;
        break;
      case config.MOVE_RIGHT:
        this.centerX += 1;
        this.centerY += 0;
        break;
    }
  }

  canMoveShape(direction) {
    let newX;
    let newY;

    for (let i = 0; i < this.blocks.length; i++) {
      switch (direction) {
        case config.MOVE_DOWN:
          newX = this.blocks[i].x;
          newY = this.blocks[i].y + 1;
          break;
        case config.MOVE_LEFT:
          newX = this.blocks[i].x - 1;
          newY = this.blocks[i].y;
          break;
        case config.MOVE_RIGHT:
          newX = this.blocks[i].x + 1;
          newY = this.blocks[i].y;
          break;
      }
      if (!this.isOnBoard(newX, newY) || this.isOccupied(newX, newY)) {
        return false;
      }
    }
    return true;
  }

  isOnBoard(x, y) {
    if (x >= 0 && y >= 0 &&
        x < config.BOARD_WIDTH && y < config.BOARD_HEIGHT) {
      return true;
    }
    return false;
  }

  isOccupied(x, y) {
    if (window.Tetris.board[y][x] === null) {
      return false;
    }
    return true;
  }
}
