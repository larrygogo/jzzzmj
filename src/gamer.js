export default class Gamer {
  id = "";
  paiArray = [];

  constructor(id) {
    this.id = id;
  }

  initPaiArray(paiArray) {
    this.paiArray = paiArray;
  }
}
