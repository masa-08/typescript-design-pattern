export abstract class Display {
  abstract open(): void
  abstract print(): void
  abstract close(): void
  display(): void {
    this.open()
    for (let i = 0; i < 5; i++) {
      this.print()
    }
    this.close()
  }
}
