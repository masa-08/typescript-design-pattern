import { Visitor } from './visitor'

export type Element = {
  accept(v: Visitor): void
}
