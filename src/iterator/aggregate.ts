import { Iterator } from './iterator'

export type Aggregate<T> = {
  iterator(): Iterator<T>
}
