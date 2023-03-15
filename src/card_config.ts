export const enum Size {
   Width_MM = 64, //The width of a standard poker playing card IRL, in mm
   HEIGHT_MM = 89, //The height of a standard poker playing card IRL, in mm
   WIDTH = Width_MM * 2,
   HEIGHT = HEIGHT_MM * 2,
   CORNER = 8,
   MARGIN_TOP = 5,
   MARGIN_BOTTOM = MARGIN_TOP,
   MARGIN_LEFT = 6,
   MARGIN_RIGHT = MARGIN_LEFT,
   CHAR_SIZE = 48,
   SUIT_SIZE = 64,
}

export const enum Suits {
   SPADES,
   HEARTS,
   DIAMONDS,
   CLUBS,
}

export const SuitColors = [0x0, 0xde1318, 0xde1318, 0x0];
export const SuitChars = ['}', '{', '[', ']', ''];
export const Chars = [
   '',
   'A',
   '2',
   '3',
   '4',
   '5',
   '6',
   '7',
   '8',
   '9',
   '=',
   'J',
   'Q',
   'K',
];

export const Font = {
   name: 'cardFont',
   image: '/fonts/CardCharacters.png',
   config: '/fonts/CardCharacters.xml',
};
