import { Hand, HandKind, HAND_KIND } from './hand'
import { Strategy } from './strategy'

export class ProbStrategy implements Strategy {
  private prevHandValue: HandKind = HAND_KIND.Rock
  private currHandValue: HandKind = HAND_KIND.Rock
  private history: number[][] = Array(3).fill(Array(3).fill(1))

  nextHand(): Hand {
    const handValue = this.choose()
    this.prevHandValue = this.currHandValue
    this.currHandValue = handValue
    return Hand.getHand(handValue)
  }

  study(win: boolean): void {
    if (win) {
      this.history[this.prevHandValue][this.currHandValue]++
    } else {
      this.history[this.prevHandValue][(this.currHandValue + 1) % 3]++
      this.history[this.prevHandValue][(this.currHandValue + 2) % 3]++
    }
  }

  private getSum(hv: number): number {
    return this.history[hv].reduce((acc, sum) => sum + acc, 0)
  }

  private choose(): HandKind {
    const bet = Math.floor(Math.random() * this.getSum(this.currHandValue))
    let handValue: HandKind
    if (bet < this.history[this.currHandValue][0]) {
      handValue = HAND_KIND.Rock // 0
    } else if (
      bet <
      this.history[this.currHandValue][0] + this.history[this.currHandValue][1]
    ) {
      handValue = HAND_KIND.Scissors // 1
    } else {
      handValue = HAND_KIND.Paper // 2
    }
    return handValue
  }
}
