import { CommandList } from './commandList'
import { Context } from './context'
import { Node } from './node'

// <program> ::= program <command list>
export class Program implements Node {
  private commandList?: Node

  parse(context: Context) {
    context.skipToken('program')
    this.commandList = new CommandList()
    this.commandList.parse(context)
  }

  toString(): string {
    return `[program ${this.commandList}]`
  }
}
