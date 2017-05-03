import Phaser from 'phaser';

export default class extends Phaser.State {
  init() {
    this.game.stage.backgroundColor = '#000';
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
  }

  create() {
    this.state.start('Preload');
  }
}
