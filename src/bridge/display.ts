import { DisplayImpl } from "./displayImpl"

export class Display {
  private readonly impl: DisplayImpl
  constructor(impl: DisplayImpl) {
    this.impl = impl
  }

  open(): void {
    this.impl.rawOpen()
  }

  print(): void {
    this.impl.rawPrint()
  }

  close(): void {
    this.impl.rawClose()
  }

  display(): void {
    this.open()
    this.print()
    this.close()
  }
}