export class Preloader extends Phaser.State {
  public preload() {
    this.load.image('player', 'images/player.png');
    this.load.tilemap('walls', 'levels/map.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tileset', 'images/tileset.png');
  }

  public create() {
    this.state.start('Menu');
  }
}
