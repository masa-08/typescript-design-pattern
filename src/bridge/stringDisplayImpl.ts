import { DisplayImpl } from "./displayImpl";

export class StringDisplayImpl extends DisplayImpl {
  private readonly str: string
  private readonly width: number
  constructor(str: string) {
    super()
    this.str = str
    this.width = this.getWidth(str)
  }

  rawOpen(): void {
    this.printLine()
  }

  rawPrint(): void {
    console.log(`|${this.str}|`)
  }

  rawClose(): void {
    this.printLine()
  }

  private printLine(): void {
    console.log(`+${Array(this.width).fill('-').join('')}+`)
  }

  private getWidth(str: string): number {
    return str.split('').reduce((width: number, current: string): number => {
      return width + (current.match(/[ -~]/) ? 1 : 2)
    }, 0)
  }
}