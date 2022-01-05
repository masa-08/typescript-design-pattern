import { Memento } from './memento'

export class Gamer {
  private _money: number
  private fruits: string[] = []
  private readonly fruitsnames = ['りんご', 'ぶどう', 'ばなな', 'みかん']
  constructor(money: number) {
    this._money = money
  }

  get money() {
    return this._money
  }

  bet() {
    switch (this.throwDice()) {
      case 1:
        this._money += 100
        console.log('所持金が増えました')
        break
      case 2:
        this._money = Math.floor(this._money / 2)
        console.log('所持金が半分になりました')
        break
      case 6: {
        const f = this.getFruit()
        console.log(`フルーツ（${f}）をもらいました`)
        this.fruits = [...this.fruits, f]
        break
      }
      default:
        console.log('何も起こりませんでした')
    }
  }

  save(): Memento {
    return new Memento(
      this._money,
      this.fruits.filter((f) => f.startsWith('おいしい'))
    )
  }

  restore(memento: Memento) {
    this._money = memento.money
    this.fruits = memento.fruits
  }

  toString(): string {
    return `[money = ${this._money}, fruits = ${this.fruits}]`
  }

  private getFruit(): string {
    const prefix = this.throwDice() % 2 === 0 ? 'おいしい' : ''
    const fruit =
      this.fruitsnames[Math.floor(Math.random() * this.fruitsnames.length)]
    return `${prefix}${fruit}`
  }

  private throwDice() {
    return Math.floor(Math.random() * 6 + 1)
  }
}
