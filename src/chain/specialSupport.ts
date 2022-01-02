import { Support } from './support'
import { Trouble } from './trouble'

export class SpecialSupport extends Support {
  private readonly num: number
  constructor(name: string, num: number) {
    super(name)
    this.num = num
  }

  protected resolve(trouble: Trouble): boolean {
    return trouble.number === this.num
  }
}
