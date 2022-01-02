import { Border } from './border'
import { Display } from './display'

export class SideBorder extends Border {
  private readonly border: string
  private readonly borderWidth = 1
  constructor(display: Display, str: string) {
    super(display)
    this.border = str
  }

  getColumns(): number {
    return this.display.getColumns() + this.borderWidth + this.borderWidth
  }

  getRows(): number {
    return this.display.getRows()
  }

  getRowText(row: number): string {
    return `${this.border}${this.display.getRowText(row)}${this.border}`
  }
}
