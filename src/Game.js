import Phaser from 'phaser';

import * as states from './states';
import config from './config';

export default class Game extends Phaser.Game {

  constructor() {
    super(config.GAME_WIDTH, config.GAME_HEIGHT, Phaser.AUTO, 'content', null);

    Object.keys(states).forEach(state => this.state.add(state, states[state]));

    this.state.start('Boot');
  }
}
