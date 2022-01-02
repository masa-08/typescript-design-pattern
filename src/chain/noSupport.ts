import { Support } from './support'

export class NoSupport extends Support {
  protected resolve(): boolean {
    return false
  }
}
