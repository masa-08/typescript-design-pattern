import { Context } from './context'
import { DayState } from './dayState'
import { State } from './state'

export class NightState implements State {
  private static _instance: NightState
  // eslint-disable-next-line no-useless-constructor
  private constructor() {}

  static get instance() {
    if (this._instance == null) {
      this._instance = new NightState()
    }
    return this._instance
  }

  clock(context: Context, hour: number): void {
    ;(hour >= 9 || hour < 17) && context.changeState(DayState.instance)
  }

  use(context: Context): void {
    context.callSecurityCenter('非常:夜間の金庫使用!')
  }

  alert(context: Context): void {
    context.callSecurityCenter('非常ベル(夜間)')
  }

  phoneCall(context: Context): void {
    context.record('夜間の通話録音')
  }

  toString(): string {
    return '[夜間]'
  }
}
