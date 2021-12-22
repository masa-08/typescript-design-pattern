import { Factory } from '../framework/factory'
import { Product } from '../framework/product'
import { IDCard } from './idcard'

export class IDCardFactory extends Factory {
  private owners: string[] = []
  protected createProduct(owner: string): Product {
    return new IDCard(owner)
  }
  protected registerProduct(idcard: IDCard): void {
    this.owners.push(idcard.owner)
  }
}
