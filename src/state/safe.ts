import { Context } from './context'
import { DayState } from './dayState'
import { State } from './state'

export class Safe implements Context {
  private state: State = DayState.instance

  do(action: string): void {
    switch (action) {
      case 'use':
        this.state.use(this)
        break
      case 'alert':
        this.state.alert(this)
        break
      case 'call':
        this.state.phoneCall(this)
        break
      default:
        console.log('?')
    }
  }

  setClock(hour: number): void {
    console.log(`現在時刻は${hour < 10 ? '0' : ''}${hour}:00`)
    this.state.clock(this, hour)
  }

  changeState(state: State): void {
    console.log(`${this.state}から${state}へ状態が変化しました`)
    this.state = state
  }

  record(msg: string): void {
    console.log(`record ... ${msg}`)
  }

  callSecurityCenter(msg: string): void {
    console.log(`call! ${msg}`)
  }
}
