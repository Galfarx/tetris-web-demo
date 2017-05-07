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

    this.turnLength = 60;
    this.turnCounter = 0;

    this.activeShape = new Shape();
    this.activeShape.createRandomShape();
    this.activeShape.activate();
  }

  update() {
    if (this.turnCounter >= this.turnLength) {
      if (this.activeShape !== null && this.activeShape.canMoveShape(config.MOVE_DOWN)) {
        this.activeShape.moveShape(config.MOVE_DOWN);
      } else {
        this.activeShape.placeShapeInBoard();
      }
      this.turnCounter = 0;
    } else {
      this.handleInput();
      this.turnCounter++;
    }
  }

  handleInput() {
    if (this.activeShape.isTweening) {
      this.activeShape.updateTween();
    } else if (this.cursors.up.isDown) {
      if (this.activeShape.canRotate()) {
        this.activeShape.rotate();
      }
    } else if (this.cursors.left.isDown) {
      if (this.activeShape.canMoveShape(config.MOVE_LEFT)) {
        this.activeShape.moveShape(config.MOVE_LEFT);
        this.activeShape.isTweening = true;
      }
    } else if (this.cursors.right.isDown) {
      if (this.activeShape.canMoveShape(config.MOVE_RIGHT)) {
        this.activeShape.moveShape(config.MOVE_RIGHT);
        this.activeShape.isTweening = true;
      }
    } else if (this.cursors.down.isDown) {
      this.turnCounter += this.turnLength / 5;
    }
  }

  promoteShapes() {
    this.activeShape = null;

    this.nextShape.clearPreview();
    this.activeShape = this.nextShape;
    this.activeShape.activate();

    this.nextShape = new Shape();
    this.nextShape.randomizeShape();
    this.nextShape.preview();
  }
}
