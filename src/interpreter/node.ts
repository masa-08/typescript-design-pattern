import { Context } from './context'

export type Node = {
  parse(context: Context): void
}
