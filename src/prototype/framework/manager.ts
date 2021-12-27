import { Product } from './product'

export class Manager {
  private showcase: { [key: string]: Product } = {}

  register({ name, product }: { name: string; product: Product }): void {
    if (name in this.showcase) {
      console.log('既に登録されている製品です')
      return
    }
    this.showcase[name] = product
  }

  create(name: string): Product | null {
    return name in this.showcase ? this.showcase[name].createClone() : null
  }
}
