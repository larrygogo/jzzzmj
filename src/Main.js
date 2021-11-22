import Gamer from "./gamer.js";
import Pai from "./pai.js";
import { orderPai, shuffle } from "./utils/utils.js";
import {ResourceLoader} from "./base/ResourceLoader.js";
import {Director} from "./Director.js";

export class Main {
  canvas = null;
  ctx = null;
  isStart = false;
  paiArray = [];
  gamerArray = [];

  constructor() {
    this.canvas = document.getElementById("gameCanvas")
    new ResourceLoader();
  }

  initPaiArray() {
    const paiArray = [];
    const typeArray = ["B", "T", "W"];
    const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let t = 0; t < typeArray.length; t++) {
      for (let n = 0; n < numberArray.length; n++) {
        for (let i = 0; i < 4; i++) {
          const pai = new Pai(numberArray[n], typeArray[t]);
          paiArray.push(pai);
        }
      }
    }
    this.paiArray = shuffle(paiArray);
  }

  start() {
    this.initPaiArray();
    this.initGamer();
    this.initGamerPaiArray();
  }

  initGamer() {
    for (let i = 0; i < 4; i++) {
      this.gamerArray.push(new Gamer(i));
    }
  }

  initGamerPaiArray() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < this.gamerArray.length; j++) {
        this.gamerArray[j].paiArray = this.gamerArray[j].paiArray.concat(
          ...this.paiArray.splice(0, 4)
        );
      }
    }
    for (let j = 0; j < this.gamerArray.length; j++) {
      this.gamerArray[j].paiArray = this.gamerArray[j].paiArray.concat(
        ...this.paiArray.splice(0, 1)
      );
      this.gamerArray[j].paiArray = orderPai(this.gamerArray[j].paiArray);
    }
  }
}
