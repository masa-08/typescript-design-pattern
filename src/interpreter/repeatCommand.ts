import { CommandList } from './commandList'
import { Context } from './context'
import { Node } from './node'

// <repeat command> ::= repeat <number> <command list>
export class RepeatCommand implements Node {
  private repeat?: number
  private commandList?: Node
  parse(context: Context): void {
    context.skipToken('repeat')
    const result = context.currentNumber()
    if (result.isSuccess()) this.repeat = result.value
    context.nextToken()
    this.commandList = new CommandList()
    this.commandList.parse(context)
  }

  toString(): string {
    return `[repeat ${this.repeat} ${this.commandList}]`
  }
}
