import Phaser from 'phaser';

export default class extends Phaser.State {

  create() {
    this.state.start('Play');
  }
}
