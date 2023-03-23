import Phaser from 'phaser';
import Card from './card';
import * as CardConfig from './card_config';

export class Deck {
   private scene: Phaser.Scene;
   public cards: Card[] = [];

   constructor(gameScene: Phaser.Scene) {
      this.scene = gameScene;

      //Make the card face Graphics Game Object
      const cardFace = this.scene.make.graphics();
      cardFace.fillStyle(0xffffff);
      cardFace.fillRoundedRect(
         0,
         0,
         CardConfig.Size.WIDTH,
         CardConfig.Size.HEIGHT,
         CardConfig.Size.CORNER
      );
      cardFace.generateTexture(
         'cardFront',
         CardConfig.Size.WIDTH,
         CardConfig.Size.HEIGHT
      );

      //Make the card character BitmapText Game Object
      const cardChar = this.scene.make.bitmapText({
         text: '',
         font: CardConfig.Font.NAME,
         size: CardConfig.Size.CHAR_SIZE,
         add: false,
      });

      //Make the card suit BitmapText Game Object
      const cardSuit = this.scene.make.bitmapText({
         text: '',
         font: CardConfig.Font.NAME,
         size: CardConfig.Size.SUIT_SIZE,
         add: false,
      });

      for (let s = 0; s < Object.keys(CardConfig.Suits).length / 2; ++s) {
         cardSuit.text = CardConfig.SuitChars[s];
         cardSuit.setTint(CardConfig.SuitColors[s]);
         cardChar.setTint(CardConfig.SuitColors[s]);

         for (
            let v = 1;
            v < Object.keys(CardConfig.Values).length / 2 + 1;
            ++v
         ) {
            cardChar.text = CardConfig.ValueChars[v];

            //Create a texture name based on value and suit
            const texID = `tex${CardConfig.Values[v]}of${CardConfig.Suits[s]}`;

            //Make a dynamic texture for this card
            const dynTex = this.scene.textures.addDynamicTexture(
               texID,
               CardConfig.Size.WIDTH,
               CardConfig.Size.HEIGHT
            );

            //Presuming the texture exists, draw the card elements to it
            dynTex?.draw(cardFace, 0, 0);
            dynTex?.draw(
               cardChar.setOrigin(0).setRotation(0),
               CardConfig.Size.MARGIN_LEFT,
               CardConfig.Size.MARGIN_TOP
            );
            dynTex?.draw(
               cardChar.setRotation(Math.PI),
               CardConfig.Size.WIDTH - CardConfig.Size.MARGIN_RIGHT,
               CardConfig.Size.HEIGHT - CardConfig.Size.MARGIN_BOTTOM
            );
            dynTex?.draw(
               cardSuit.setOrigin(0.5),
               CardConfig.Size.WIDTH * 0.5,
               CardConfig.Size.HEIGHT * 0.5
            );

            //Make an Image gameObject using the texture we just created, then configure a Card
            this.cards.push({
               suit: s,
               value: v,
               gameObject: this.scene.make.image({ key: texID }),
            });
         }
      }
   }

   private Shuffle() {
      for (let i = this.cards.length - 1; i > 0; --i) {
         const j = Math.floor(Math.random() * (i + 1));
         [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
   }
   public Deal() {
      this.Shuffle();
      for (let i = 0; i < this.cards.length; ++i) {
         this.cards[i].gameObject.scale = 0.5;
         this.cards[i].gameObject.x =
            (this.scene.game.scale.width / 13) * (i % 13) +
            this.cards[i].gameObject.displayWidth * 0.58;
         this.cards[i].gameObject.y =
            (this.scene.game.scale.height / 4) * Math.floor(i / 13) +
            this.cards[i].gameObject.displayHeight * 0.78;

         this.cards[i].gameObject.addToDisplayList();
      }
   }
}
