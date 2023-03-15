// import Phaser from 'phaser';
// import * as CardConfig from './card_config';

export class Deck {
   //    function buildDeck(){
   //       //Make the card elements
   //       const cardFace = this.make.graphics();
   //       cardFace.fillStyle(0xffffff);
   //       cardFace.fillRoundedRect(
   //          0,
   //          0,
   //          Cards.Size.WIDTH,
   //          Cards.Size.HEIGHT,
   //          Cards.Size.CORNER
   //       );
   //       cardFace.generateTexture(
   //          'cardFront',
   //          Cards.Size.WIDTH,
   //          Cards.Size.HEIGHT
   //       );
   //       const cardChar = this.make
   //          .bitmapText({
   //             text: Cards.Chars[1],
   //             font: Cards.Font.name,
   //             size: Cards.Size.CHAR_SIZE,
   //             add: false,
   //          })
   //          .setTint(Cards.SuitColors[Cards.Suits.SPADES]);
   //       const cardSuit = this.make
   //          .bitmapText({
   //             text: Cards.SuitChars[Cards.Suits.SPADES],
   //             font: Cards.Font.name,
   //             size: Cards.Size.SUIT_SIZE,
   //             add: false,
   //          })
   //          .setTint(Cards.SuitColors[Cards.Suits.SPADES]);
   //       //Make the dynamic texture and render the elements
   //       const dynTex = this.textures.addDynamicTexture(
   //          'card',
   //          Cards.Size.WIDTH,
   //          Cards.Size.HEIGHT
   //       );
   //       dynTex?.draw(cardFace, 0, 0);
   //       dynTex?.draw(
   //          cardChar.setOrigin(0),
   //          Cards.Size.MARGIN_LEFT,
   //          Cards.Size.MARGIN_TOP
   //       );
   //       dynTex?.draw(
   //          cardChar.setRotation(Math.PI),
   //          Cards.Size.WIDTH - Cards.Size.MARGIN_RIGHT,
   //          Cards.Size.HEIGHT - Cards.Size.MARGIN_BOTTOM
   //       );
   //       dynTex?.draw(
   //          cardSuit.setOrigin(0.5),
   //          Cards.Size.WIDTH * 0.5,
   //          Cards.Size.HEIGHT * 0.5
   //       );
   //       this.add.image(480, 270, 'card');
   //    }
}
