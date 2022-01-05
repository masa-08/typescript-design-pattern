import { State } from './state'

export type Context = {
  setClock(hour: number): void
  changeState(state: State): void
  record(msg: string): void
  callSecurityCenter(msg: string): void
}
