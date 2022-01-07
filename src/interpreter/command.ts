import { Context } from './context'
import { Node } from './node'
import { PrimitiveCommand } from './primitiveCommand'
import { RepeatCommand } from './repeatCommand'

// <command> ::= <repeat command> | <primitive command>
export class Command implements Node {
  private node?: Node
  parse(context: Context): void {
    const result = context.currentToken()
    if (result.isFailure()) {
      throw new Error('Cannot parse tokens')
    }

    this.node =
      result.value === 'repeat' ? new RepeatCommand() : new PrimitiveCommand()
    this.node.parse(context)
  }

  toString(): string {
    return `${this.node}`
  }
}
