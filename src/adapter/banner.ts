export class Banner {
  private readonly str: string
  constructor(str: string) {
    this.str = str
  }

  showWithParen(): void {
    console.log(`(${this.str})`)
  }

  showWithAster(): void {
    console.log(`*${this.str}*`)
  }
}
