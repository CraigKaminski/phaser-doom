export class Preloader extends Phaser.State {
  public preload() {

  }

  public create() {
    this.state.start('Menu');
  }
}
