import Phaser from 'phaser';

import * as states from './states';
import config from './config';

export default class Game extends Phaser.Game {

  constructor() {
    const width = config.gameHeight;
    const height = config.gameHeight;

    super(width, height, Phaser.AUTO, 'content', null);

    Object.keys(states).forEach(state => this.state.add(state, states[state]));

    this.state.start('Boot');
  }
}
