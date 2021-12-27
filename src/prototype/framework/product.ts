export type Product = {
  use(str: string): void
  createClone(): Product
}
