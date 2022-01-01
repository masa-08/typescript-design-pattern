import { Hand } from './hand'

export type Strategy = {
  nextHand(): Hand
  study(win: boolean): void
}
