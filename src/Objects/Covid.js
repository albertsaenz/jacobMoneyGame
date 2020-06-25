class Covid extends Phaser.Physics.Arcade.Group {
    constructor(config) {
        super(config.physicsWorld, config.scene);
        this.addCovid();
    }

    addCovid() {
        this.create(
            Phaser.Math.Between(40, this.scene.scale.width - 40)
            , -10, 'virus',Phaser.Math.Between(0, 2))
            // .setBounce(1)
            .setCircle(14)
            .setVelocityX(
                0
            )
            .setGravityY(-1900)
            .setCollideWorldBounds(false).setScale(1.5);
    }

    destroyItem() {
        if(this.getChildren().length == 10){
        this.clear(true,true);
        }
    }

    update() {
        this.children.iterate( covid => {
            if(covid.body.velocity.x < 0) {
                covid.setAngularVelocity(-300);
            } else {
                covid.setAngularVelocity(300);
            }
        });
    }
}

export default Covid;