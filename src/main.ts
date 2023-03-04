import Phaser from 'phaser';

class Demo extends Phaser.Scene {
   constructor() {
      super('demo');
   }

   preload() {
      this.load.image('logo', 'phaser3-logo.png');
      this.load.glsl('stars', 'starfields.glsl.js');
   }

   create() {
      this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0);
      const logo = this.add.image(400, 200, 'logo');

      this.tweens.add({
         targets: logo,
         y: 400,
         duration: 2500,
         ease: 'Sine.inOut',
         yoyo: true,
         repeat: -1,
      });
   }
}

const config: Phaser.Types.Core.GameConfig = {
   type: Phaser.AUTO,
   autoCenter: Phaser.Scale.CENTER_BOTH,
   parent: 'app',
   width: 800,
   height: 600,
   scene: [Demo],
};

export default new Phaser.Game(config);
