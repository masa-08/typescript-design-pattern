import { Banner } from '../banner'
import { Print } from './print'

export class PrintBanner extends Banner implements Print {
  constructor(str: string) {
    super(str)
  }

  printWeak(): void {
    this.showWithParen()
  }

  printStrong(): void {
    this.showWithAster()
  }
}
