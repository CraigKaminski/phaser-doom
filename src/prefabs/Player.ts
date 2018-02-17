export class Player extends Phaser.Sprite {
  public body: Phaser.Physics.Arcade.Body;
  private cursors: Phaser.CursorKeys;
  private readonly SPEED = 300;
  private readonly TURNSPEED = 200;

  constructor(game: Phaser.Game, x: number, y: number) {
    super(game, x, y, 'player');

    this.anchor.setTo(0.5);
    this.game.physics.arcade.enable(this);
    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  public update() {
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;
    this.body.angularVelocity = 0;

    if (this.cursors.up.isDown) {
      this.game.physics.arcade.velocityFromAngle(this.angle, this.SPEED, this.body.velocity);
    }

    if (this.cursors.down.isDown) {
      this.game.physics.arcade.velocityFromAngle(this.angle, -this.SPEED, this.body.velocity);
    }

    if (this.cursors.left.isDown) {
      this.body.angularVelocity = -this.TURNSPEED;
    }

    if (this.cursors.right.isDown) {
      this.body.angularVelocity = this.TURNSPEED;
    }
  }
}
