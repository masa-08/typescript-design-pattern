import { Hand, HandKind, HAND_KIND } from './hand'
import { Strategy } from './strategy'

export class WinningStrategy implements Strategy {
  private won = false
  private prevHand: Hand = Hand.getHand(0)

  nextHand(): Hand {
    this.prevHand = this.won
      ? this.prevHand
      : Hand.getHand(this.chooseRandomly())
    return this.prevHand
  }

  study(win: boolean): void {
    this.won = win
  }

  private chooseRandomly(): HandKind {
    switch (Math.floor(Math.random() * 3)) {
      case 1:
        return HAND_KIND.Rock
      case 2:
        return HAND_KIND.Scissors
      case 3:
        return HAND_KIND.Paper
      default:
        return HAND_KIND.Rock
    }
  }
}
