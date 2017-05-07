import Phaser from 'phaser';

import config from '../config';

export default class extends Phaser.State {
  init() {
    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  create() {
    window.Tetris.shapesJSON = this.game.cache.getJSON('shapes');
    window.Tetris.shapes = window.Tetris.shapesJSON.shapes;
    
    this.board = new Array(config.BOARD_HEIGHT);
    for (let i = 0; i < config.BOARD_HEIGHT; i++) {
      this.board[i] = new Array(this.BOARD_WIDTH);
      for (let j = 0; j < config.BOARD_WIDTH; j++) {
        this.board[i][j] = null;
      }
    }
  }
}
