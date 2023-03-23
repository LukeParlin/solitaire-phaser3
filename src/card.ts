import Phaser from 'phaser';

export default interface Card {
   suit: number;
   value: number;

   gameObject: Phaser.GameObjects.Image;
}
