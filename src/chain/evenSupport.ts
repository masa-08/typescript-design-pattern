import { Support } from './support'
import { Trouble } from './trouble'

export class EvenSupport extends Support {
  protected resolve(trouble: Trouble): boolean {
    return trouble.number % 2 === 0
  }
}
