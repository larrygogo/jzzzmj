export class Director {
  static instance = null;

  constructor() {
    console.log("初始化");
  }

  static getInstance() {
    if (!Director.instance) {
      Director.instance = new Director();
    }
    return Director.instance;
  }
}
