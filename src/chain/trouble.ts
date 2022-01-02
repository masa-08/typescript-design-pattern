export class Trouble {
  private readonly num: number
  constructor(num: number) {
    this.num = num
  }

  get number() {
    return this.num
  }

  toString(): string {
    return `[Trouble ${this.num}]`
  }
}
