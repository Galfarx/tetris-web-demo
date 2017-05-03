import Phaser from 'phaser';

export default class extends Phaser.State {
  init() {
    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  create() {
    console.log('PhaserOn');
  }
}
