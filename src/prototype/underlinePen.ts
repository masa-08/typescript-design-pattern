import { Product } from './framework/product'
import { ConcreteProduct } from './concreteProduct'

export class UnderlinePen extends ConcreteProduct implements Product {
  private readonly ulchar: string
  constructor(ulchar: string) {
    super()
    this.ulchar = ulchar
  }

  use(str: string): void {
    const width = this.getWidth(str)
    console.log(`"${str}"`)
    console.log(` ${Array(width).fill(this.ulchar).join('')} `)
  }
}
