import { Product } from './product'

export abstract class Factory {
  create(owner: string): Product {
    const product: Product = this.createProduct(owner)
    this.registerProduct(product)
    return product
  }
  protected abstract createProduct(owner: string): Product
  protected abstract registerProduct(product: Product): void
}
