export abstract class Entry {
  abstract get name(): string
  abstract getSize(): number

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  add(entry: Entry): void {}

  print(): void {
    this.printList('')
  }

  abstract printList(prefix: string): void

  toString(): string {
    return `${this.name} (${this.getSize()})`
  }
}
