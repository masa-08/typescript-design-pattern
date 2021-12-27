import { Product } from './framework/product'
import { ConcreteProduct } from './concreteProduct'

export class MessageBox extends ConcreteProduct implements Product {
  private readonly decochar: string
  private readonly prefixAndSuffix = 4
  constructor(decochar: string) {
    super()
    this.decochar = decochar
  }

  use(str: string): void {
    const width = this.getWidth(str) + this.prefixAndSuffix
    console.log(`${Array(width).fill(this.decochar).join('')}`)
    console.log(`${this.decochar} ${str} ${this.decochar}`)
    console.log(`${Array(width).fill(this.decochar).join('')}`)
  }
}
