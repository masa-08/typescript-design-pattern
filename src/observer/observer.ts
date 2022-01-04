import { NumberGenerator } from './numberGenerator'

export type Observer = {
  update(generator: NumberGenerator): void
}
