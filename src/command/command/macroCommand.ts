import { Command } from './command'

export class MacroCommand implements Command {
  private commands: Command[] = []

  execute(): void {
    this.commands.forEach((c) => c.execute())
  }

  append(cmd: Command) {
    cmd !== this && this.commands.push(cmd)
  }

  undo() {
    this.commands.pop()
  }

  clear() {
    this.commands = []
  }
}
