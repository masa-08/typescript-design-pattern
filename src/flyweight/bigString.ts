import { BigChar } from './bigChar'
import { BigCharFactory } from './bigCharFactory'

export class BigString {
  private chars: BigChar[]
  constructor(str: string) {
    const f = BigCharFactory.instance
    this.chars = str.split('').map((s) => f.getBigChar(s))
  }

  print() {
    this.chars.forEach((c) => c.print())
  }
}
