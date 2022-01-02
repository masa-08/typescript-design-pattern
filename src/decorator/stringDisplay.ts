import { Display } from './display'

export class StringDisplay extends Display {
  private readonly str: string
  constructor(str: string) {
    super()
    this.str = str
  }

  getColumns(): number {
    return this.getWidth(this.str)
  }

  getRows(): number {
    return 1
  }

  getRowText(row: number): string {
    return row === 0 ? this.str : ''
  }

  private getWidth(str: string): number {
    return str
      .split('')
      .reduce(
        (width: number, current: string): number =>
          width + (current.match(/[ -~]/) ? 1 : 2),
        0
      )
  }
}
