import Phaser from 'phaser';
import config from '../config';

export default class extends Phaser.State {

  preload() {
    const imagesPath = '../assets/images';

    this.load.spritesheet('block', `${imagesPath}/blocks_spritesheet.png`, config.BLOCK_SIDE_LENGTH, config.BLOCK_SIDE_LENGTH);
    this.load.image('background', `${imagesPath}/background.png`);
  }

  create() {
    this.state.start('Play');
  }
}
