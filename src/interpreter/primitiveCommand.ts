import { Context } from './context'
import { Node } from './node'

// <primitive command> ::= go | right | left
export class PrimitiveCommand implements Node {
  private name?: 'go' | 'right' | 'left'
  parse(context: Context) {
    const result = context.currentToken()
    if (result.isFailure()) {
      throw new Error('Cannot parse tokens')
    } else if (
      result.value !== 'go' &&
      result.value !== 'right' &&
      result.value !== 'left'
    ) {
      throw new Error(`${result.value} is undefined`)
    }
    this.name = result.value
    context.skipToken(this.name)
  }

  toString(): string {
    return this.name!
  }
}
