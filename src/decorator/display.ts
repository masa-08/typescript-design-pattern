export abstract class Display {
  abstract getColumns(): number
  abstract getRows(): number
  abstract getRowText(row: number): string // row番目の文字列を得る

  show(): void {
    for (let i = 0; i < this.getRows(); i++) {
      console.log(this.getRowText(i))
    }
  }
}
