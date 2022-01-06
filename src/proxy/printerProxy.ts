import { Printable } from './printable'
import { Printer } from './printer'

export class PrinterProxy implements Printable {
  private name: string
  private real?: Printer
  constructor(name: string) {
    this.name = name
  }

  setPrinterName(name: string): void {
    this.real != null && this.real.setPrinterName(name)
    this.name = name
  }

  getPrinterName(): string {
    return this.name
  }

  print(str: string) {
    this.realize()
    this.real?.print(str)
  }

  private realize() {
    this.real == null && new Printer(this.name)
  }
}
