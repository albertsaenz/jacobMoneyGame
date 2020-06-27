import Bootloader from './Bootloader.js';
import Play from './scenes/Play.js';
import Menu from './scenes/Menu.js';
import UI from './scenes/UI.js';
const config = {
    title: "CVGame",
    version: "1.0.0",
    type: Phaser.AUTO,
    input :{
		activePointers:3,
	  },
    scale: {
        parent: "phaser_container",
        width: 360,
        height: 600,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#10375c",
    pixelArt: true,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 2000
            },
            // debug:true,
        }
    },
    scene: [
        Bootloader,
        UI,
        Play,
        Menu
    ]
};
new Phaser.Game(config);