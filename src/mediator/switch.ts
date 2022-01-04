import { Colleague } from './colleague'
import { Mediator } from './mediator'

export class Switch implements Colleague {
  private mediator?: Mediator
  private _toggled = false // スイッチのON/OFF
  private enabled = true // スイッチの有効/無効
  private id
  constructor(id: string) {
    this.id = id
  }

  get toggled() {
    return this._toggled
  }

  setMediator(mediator: Mediator): void {
    this.mediator = mediator
  }

  setColleagueEnabled(enabled: boolean): void {
    this.enabled = enabled
  }

  toggle(): void {
    if (!this.enabled) {
      console.log(`Cannot toggle switch ${this.id}`)
      return
    }
    this._toggled = !this._toggled
    this.mediator?.colleagueChanged()
  }

  toString(): string {
    return `[Switch ${this.id}] toggled:${this._toggled}, enabled: ${this.enabled}}`
  }
}
