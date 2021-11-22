import { Card } from "./Card";

export default class Gamer {
  id: string = "";
  cardArray: Card[] = [];

  constructor(id: string) {
    this.id = id;
  }

  initPaiArray(cardArray: Card[]) {
    this.cardArray = cardArray;
  }
}
