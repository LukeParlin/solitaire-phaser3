import Phaser from 'phaser';
import * as CardConfig from './card_config';
import { Deck } from './deck';

class PlaygroundScene extends Phaser.Scene {
   constructor() {
      super('playground');
   }

   preload() {
      this.load.bitmapFont(
         CardConfig.Font.NAME,
         CardConfig.Font.IMAGE,
         CardConfig.Font.CONFIG
      );
   }

   create() {
      const deck = new Deck(this);
      deck.Deal();
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
