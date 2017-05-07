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
}
