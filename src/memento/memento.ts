export class Memento {
  private _money: number
  private _fruits: string[]
  constructor(money: number, fruits: string[]) {
    this._money = money
    this._fruits = fruits
  }

  get money() {
    return this._money
  }

  get fruits() {
    return [...this._fruits]
  }
}
