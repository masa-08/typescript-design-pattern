import _ from 'lodash'
import { Product } from './framework/product'

export class ConcreteProduct implements Product {
  use(str: string): void {}

  createClone(): Product {
    return _.clone<Product>(this)
  }

  protected getWidth(str: string): number {
    let width = 0
    for (const s of str) {
      width += s.match(/[ -~]/) ? 1 : 2
    }
    return width
  }
}
