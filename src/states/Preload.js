import Phaser from 'phaser';
import config from '../config';

export default class extends Phaser.State {

  preload() {
    this.load.spritesheet('block', 'assets/blocks_spritesheet.png', config.BLOCK_SIDE_LENGTH, config.BLOCK_SIDE_LENGTH);
    this.load.image('background', 'assets/background.png');
  }

  create() {
    this.state.start('Play');
  }
}
