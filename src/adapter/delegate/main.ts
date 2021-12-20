import { Print } from './print'
import { PrintBanner } from './printBanner'

const print: Print = new PrintBanner('Hello')
print.printWeak()
print.printStrong()
