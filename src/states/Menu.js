import Phaser from 'phaser';
import TextButton from '../extensions/Textbutton';

export default class extends Phaser.State {
  init() {
    this.game.stage.backgroundColor = '#000';
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
  }

  create() {
    this.title = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY - 40, 'Simple Tetris', {
      font: '18px Verdana',
      fill: 'white',
      align: 'center',
    });
    this.title.anchor.setTo(0.5);

    this.start = new TextButton({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      asset: null,
      overFrame: null,
      outFrame: null,
      downFrame: null,
      upFrame: null,
      label: 'Start',
      style: {
        font: '10px Verdana',
        fill: 'white',
        align: 'center',
      },
    });

    this.source = new TextButton({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY + 20,
      asset: null,
      overFrame: null,
      outFrame: null,
      downFrame: null,
      upFrame: null,
      label: 'View source code',
      style: {
        font: '10px Verdana',
        fill: 'white',
        align: 'center',
      },
    });

    this.start.onInputUp.add(() => {
      this.state.start('Play');
    });

    this.source.onInputUp.add(() => {
      window.open('https://github.com/Galfarx/tetris-web-demo', '_blank');
    });

    this.menuPanel = this.add.group();
    this.menuPanel.add(this.title);
    this.menuPanel.add(this.start);
    this.menuPanel.add(this.source);
  }
}
