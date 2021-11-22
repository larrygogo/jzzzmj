import { Resource } from "./Resource.js";

export class ResourceLoader {
  map = null;

  constructor() {
    this.map = new Map(Resource);
    console.log(this.map);
  }
}
