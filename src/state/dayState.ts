import { Context } from './context'
import { NightState } from './nightState'
import { State } from './state'

export class DayState implements State {
  private static _instance: DayState
  // eslint-disable-next-line no-useless-constructor
  private constructor() {}

  static get instance() {
    if (this._instance == null) {
      this._instance = new DayState()
    }
    return this._instance
  }

  clock(context: Context, hour: number): void {
    ;(hour < 9 || hour >= 17) && context.changeState(NightState.instance)
  }

  use(context: Context): void {
    context.record('金庫使用(昼間)')
  }

  alert(context: Context): void {
    context.callSecurityCenter('非常ベル(昼間)')
  }

  phoneCall(context: Context): void {
    context.callSecurityCenter('通常の通話(昼間)')
  }

  toString(): string {
    return '[昼間]'
  }
}
