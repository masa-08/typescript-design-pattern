import { Printable } from './printable'

export class Printer implements Printable {
  private name: string
  constructor(name: string) {
    this.name = name
    this.heavyJob(`Printerのインスタンス(${name})を生成中`)
  }

  setPrinterName(name: string) {
    this.name = name
  }

  getPrinterName() {
    return this.name
  }

  print(str: string) {
    console.log(`=== ${this.name} ===`)
    console.log(str)
  }

  private heavyJob(msg: string) {
    console.log(msg)
    let count = 0
    for (let i = 0; i < 1000000000; i++) {
      count++
    }
    console.log(count)
    console.log('完了')
  }
}
