import { Product } from '../framework/product'

export class IDCard extends Product {
  private readonly _owner: string
  constructor(owner: string) {
    super()
    console.log(`${owner}のカードを作ります`)
    this._owner = owner
  }

  get owner() {
    return this._owner
  }

  use(): void {
    console.log(`${this._owner}のカードを使います`)
  }
}
