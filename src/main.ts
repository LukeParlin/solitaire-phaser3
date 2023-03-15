import Phaser from 'phaser';
import * as CardConfig from './card_config';

class PlaygroundScene extends Phaser.Scene {
   constructor() {
      super('playground');
   }

   preload() {
      this.load.bitmapFont(
         CardConfig.Font.name,
         CardConfig.Font.image,
         CardConfig.Font.config
      );
   }

   create() {
      //
   }
}

const config: Phaser.Types.Core.GameConfig = {
   type: Phaser.AUTO,
   scene: [PlaygroundScene],
   scale: {
      parent: 'game',
      width: 960,
      height: 540,
      mode: Phaser.Scale.NONE,
      autoCenter: Phaser.Scale.CENTER_BOTH,
   },
   mipmapFilter: 'LINEAR_MIPMAP_NEAREST',
};

export default new Phaser.Game(config);
