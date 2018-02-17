import { Player } from '../prefabs/Player';

export class Game extends Phaser.State {
  private layer: Phaser.TilemapLayer;
  private map: Phaser.Tilemap;
  private player: Player;

  public create() {
    this.map = this.add.tilemap('walls', 64, 64);
    this.map.addTilesetImage('tileset', 'tileset');
    this.map.setCollision(1);
    this.layer = this.map.createLayer('Tile Layer 1');
    this.layer.resizeWorld();

    this.player = new Player(this.game, 192, 192);
    this.add.existing(this.player);
    this.camera.follow(this.player);
  }

  public update() {
    this.player.update();
    this.game.physics.arcade.collide(this.player, this.layer);
  }
}
