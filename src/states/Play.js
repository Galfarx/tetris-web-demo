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

    this.completedRows = [];
    this.isUpdatingAfterRowClear = false;

    this.nextShape = new Shape();
    this.nextShape.createRandomShape();

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
        this.completedRows = this.getCompleteRows();
        if (this.completedRows.length > 0) {
          this.clearRow(this.completedRows);
          this.isUpdatingAfterRowClear = true;
        } else {
          this.promoteShapes();
        }
        this.completedRows = [];
      }
      this.turnCounter = 0;
    } else if (this.isUpdatingAfterRowClear) {
      if (this.turnCounter >= this.turnLength / 10) {
        this.isUpdatingAfterRowClear = false;
        this.promoteShapes();
      } else {
        this.turnCounter++;
      }
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
    this.activeShape = this.nextShape;
    this.activeShape.activate();

    this.nextShape = new Shape();
    this.nextShape.createRandomShape();
  }

  getCompleteRows() {
    const completeRows = [];

    for (let i = 0; i < window.Tetris.board.length; i++) {
      if (this.isRowFull(i)) {
        completeRows.push(i);
      }
    }
    return completeRows;
  }

  isRowFull(row) {
    for (let i = 0; i < window.Tetris.board[row].length; i++) {
      if (window.Tetris.board[row][i] === null) {
        return false;
      }
    }
    return true;
  }

  clearRow(completedRows) {
    let row;
    let actualRowToClear;
    let alreadyShifted = 0;

    for (let i = completedRows.length - 1; i >= 0; i--) {
      actualRowToClear = completedRows[i] + alreadyShifted;

      row = window.Tetris.board[actualRowToClear];

      for (let j = 0; j < row.length; j++) {
        window.Tetris.board[actualRowToClear][j].clean();
        window.Tetris.board[actualRowToClear][j] = null;
      }
      this.dropRowsAbove(actualRowToClear - 1);
      alreadyShifted++;
    }
  }

  dropRowsAbove(row) {
    let block;

    for (let i = row; i >= 0; i--) {
      for (let j = 0; j < window.Tetris.board[i].length; j++) {
        block = window.Tetris.board[i][j];
        if (block !== null) {
          window.Tetris.board[i][j].moveBlock(block.x, block.y + 1);
          window.Tetris.board[i + 1][j] = window.Tetris.board[i][j];
          window.Tetris.board[i][j] = null;
        }
      }
    }
  }
}
