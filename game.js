let game = new Phaser.Game({
    width: 800, // width of the game in pixels
    height: 600, // height of the game in pixels
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
});

function preload () {
    // load game assets here
    this.load.image('sky', 'assets/sky.png');
}

function create () {
    // create game entities here
    this.add.image(0, 0, 'sky').setOrigin(0, 0);
}

function update () {
    // game loop code goes here
}
