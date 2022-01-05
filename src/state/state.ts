import { Context } from './context'

export type State = {
  clock(context: Context, hour: number): void
  use(context: Context): void
  alert(context: Context): void
  phoneCall(context: Context): void
}
