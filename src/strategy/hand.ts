export const HAND_KIND = {
  Rock: 0,
  Scissors: 1,
  Paper: 2,
} as const
export type HandKind = typeof HAND_KIND[keyof typeof HAND_KIND]

export class Hand {
  private readonly value: HandKind
  private constructor(hand: HandKind) {
    this.value = hand
  }

  static hands: Hand[] = [
    new Hand(HAND_KIND.Rock),
    new Hand(HAND_KIND.Scissors),
    new Hand(HAND_KIND.Paper),
  ]

  static getHand(hand: HandKind): Hand {
    return this.hands[hand]
  }

  isStrongerThan(hand: Hand): boolean {
    return this.fight(hand) === 1
  }

  isWeakerThan(hand: Hand): boolean {
    return this.fight(hand) === -1
  }

  // 0: 引き分け, 1: thisの勝ち, -1: handの勝ち
  private fight(hand: Hand): number {
    if (this.value === hand.value) {
      return 0
    } else if ((this.value + 1) % 3 === hand.value) {
      return 1
    } else {
      return -1
    }
  }

  toString(): string {
    switch (this.value) {
      case HAND_KIND.Rock:
        return 'グー'
      case HAND_KIND.Scissors:
        return 'チョキ'
      case HAND_KIND.Paper:
        return 'パー'
    }
  }
}
