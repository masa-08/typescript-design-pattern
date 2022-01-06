import { Printable } from './printable'
import { PrinterProxy } from './printerProxy'

const p: Printable = new PrinterProxy('Alice')
console.log(`名前は現在${p.getPrinterName()}です`)
p.setPrinterName('Bob')
console.log(`名前は現在${p.getPrinterName()}です`)
p.print('Hello, world.')
