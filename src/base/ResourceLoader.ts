import { Resource } from "./Resource";

export class ResourceLoader {
  map = null;

  constructor() {
    // @ts-ignore
    this.map = new Map<string, string>(Resource);
    console.log(this.map);
  }
}
