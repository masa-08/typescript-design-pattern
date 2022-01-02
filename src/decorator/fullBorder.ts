import { Border } from './border'

export class FullBorder extends Border {
  private readonly borderWidth = 1

  getColumns(): number {
    return this.display.getColumns() + this.borderWidth * 2 // 左右
  }

  getRows(): number {
    return this.display.getRows() + this.borderWidth * 2 // 上下
  }

  getRowText(row: number): string {
    return row === 0 || row === this.display.getRows() + 1
      ? `+${this.makeLine('-', this.display.getColumns())}+` // 枠の上端 or 下端
      : `|${this.display.getRowText(row - 1)}|` // それ以外
  }

  private makeLine(char: string, count: number): string {
    return Array(count).fill(char).join('')
  }
}
