import { Element } from './element'
import { Visitor } from './visitor'

export abstract class Entry implements Element {
  abstract get name(): string
  abstract getSize(): number

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  add(entry: Entry): void {}

  print(): void {
    this.printList('')
  }

  abstract printList(prefix: string): void

  abstract accept(v: Visitor): void

  toString(): string {
    return `${this.name} (${this.getSize()})`
  }
}
