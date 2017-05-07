import Phaser from 'phaser';
import Shape from '../prefabs/Shape';

import config from '../config';

export default class extends Phaser.State {
  init() {
    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  create() {
    window.Tetris.shapesJSON = this.game.cache.getJSON('shapes');
    window.Tetris.shapes = window.Tetris.shapesJSON.shapes;

    window.Tetris.board = new Array(config.BOARD_HEIGHT);
    for (let i = 0; i < config.BOARD_HEIGHT; i++) {
      window.Tetris.board[i] = new Array(this.BOARD_WIDTH);
      for (let j = 0; j < config.BOARD_WIDTH; j++) {
        window.Tetris.board[i][j] = null;
      }
    }

    this.activeShape = new Shape();
    this.activeShape.createRandomShape();
    this.activeShape.activate();
  }

  update() {
    if (this.activeShape !== null && this.activeShape.canMoveShape(config.MOVE_DOWN)) {
      this.activeShape.moveShape(config.MOVE_DOWN);
    } else {
      this.activeShape.placeShapeInBoard();
    }
  }
}
