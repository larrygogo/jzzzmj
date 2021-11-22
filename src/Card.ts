export class Card {
  number: number;
  type: ICard.CardType;

  constructor(number: number, type: ICard.CardType) {
    this.number = number;
    this.type = type;
  }
}
