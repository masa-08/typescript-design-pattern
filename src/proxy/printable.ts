export type Printable = {
  setPrinterName(name: string): void
  getPrinterName(): string
  print(str: string): void
}
