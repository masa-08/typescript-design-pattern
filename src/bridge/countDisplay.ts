import { Display } from "./display";

export class CountDisplay extends Display {
  multiDisplay(times: number): void {
    this.open()
    Array(times).fill(0).map(() => this.print())
    this.close()
  }
}
