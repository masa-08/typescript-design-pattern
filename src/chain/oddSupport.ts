import { Support } from './support'
import { Trouble } from './trouble'

export class OddSupport extends Support {
  protected resolve(trouble: Trouble): boolean {
    return trouble.number % 2 === 1
  }
}
