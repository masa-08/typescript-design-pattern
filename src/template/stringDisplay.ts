import { Display } from './display'

export class StringDisplay extends Display {
  private readonly str: string
  private readonly width: number
  constructor(str: string) {
    super()
    this.str = str
    this.width = this.getWidth()
  }

  open() {
    this.printLine()
  }
  print() {
    console.log(`|${this.str}|`)
  }
  close() {
    this.printLine()
  }
  private printLine() {
    console.log(`+${Array(this.width).fill('-').join('')}+`)
  }

  private getWidth(): number {
    let width = 0
    for (const s of this.str) {
      width += s.match(/[ -~]/) ? 1 : 2
    }
    return width
  }
}
