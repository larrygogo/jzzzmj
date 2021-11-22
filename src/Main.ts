import Gamer from "./Gamer";
import { Card } from "./Card";
import { orderPai, shuffle } from "./utils/utils";
import { ResourceLoader } from "./base/ResourceLoader";

export class Main {
  private readonly canvas: HTMLCanvasElement | null = null;
  private readonly ctx: CanvasRenderingContext2D | null = null;
  cardArray: Card[] = [];
  gamerArray: Gamer[] = [];

  constructor() {
    this.canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
    if(this.canvas) {
      this.ctx = this.canvas.getContext('2d')

    }

    new ResourceLoader();
  }

  initPaiArray() {
    const paiArray = [];
    const typeArray: ICard.CardType[] = ["B", "T", "W"];
    const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let t = 0; t < typeArray.length; t++) {
      for (let n = 0; n < numberArray.length; n++) {
        for (let i = 0; i < 4; i++) {
          const pai = new Card(numberArray[n], typeArray[t]);
          paiArray.push(pai);
        }
      }
    }
    this.cardArray = shuffle(paiArray);
  }

  start() {
    this.initPaiArray();
    this.initGamer();
    this.initGamerPaiArray();
  }

  initGamer() {
    for (let i = 0; i < 4; i++) {
      this.gamerArray.push(new Gamer(i.toString()));
    }
  }

  initGamerPaiArray() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < this.gamerArray.length; j++) {
        this.gamerArray[j].cardArray = this.gamerArray[j].cardArray.concat(
          ...this.cardArray.splice(0, 4)
        );
      }
    }
    for (let j = 0; j < this.gamerArray.length; j++) {
      this.gamerArray[j].cardArray = this.gamerArray[j].cardArray.concat(
        ...this.cardArray.splice(0, 1)
      );
      this.gamerArray[j].cardArray = orderPai(this.gamerArray[j].cardArray);
    }
  }
}
