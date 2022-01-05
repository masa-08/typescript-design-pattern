import { BigChar } from './bigChar'

export class BigCharFactory {
  private pool: { [key: string]: BigChar }
  private static _instance: BigCharFactory
  private constructor() {
    this.pool = {}
  }

  static get instance(): BigCharFactory {
    if (this._instance == null) {
      this._instance = new BigCharFactory()
    }
    return this._instance
  }

  getBigChar(char: string): BigChar {
    if (!(char in this.pool)) {
      this.pool[char] = new BigChar(char)
    }
    return this.pool[char]
  }
}
