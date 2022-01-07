import { Command } from './command'
import { Context } from './context'
import { Node } from './node'

// <command list> ::= <command>* end
export class CommandList implements Node {
  private commands: Command[] = []
  parse(context: Context): void {
    while (true) {
      const result = context.currentToken()
      if (result.isFailure()) {
        throw new Error('Missing "end"')
      } else if (result.value === 'end') {
        context.skipToken('end')
        break
      } else {
        const command = new Command()
        command.parse(context)
        this.commands = [...this.commands, command]
      }
    }
  }

  toString(): string {
    return `[${this.commands}]`
  }
}
