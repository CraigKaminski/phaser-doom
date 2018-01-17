import { baseHeight, baseWidth, scale } from '../constants';

export class Boot extends Phaser.State {
  public preload() {

  }

  public create() {
    this.stage.smoothed = false;
    this.scale.minWidth = baseWidth;
    this.scale.minWidth = baseHeight;
    this.scale.maxWidth = baseWidth * scale;
    this.scale.maxHeight = baseHeight * scale;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    this.game.canvas.oncontextmenu = (e) => e.preventDefault();

    this.state.start('Preloader');
  }
}
