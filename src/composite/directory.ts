import { Entry } from './entry'

export class Directory extends Entry {
  private readonly _name: string
  private directory: Entry[] = []
  constructor(name: string) {
    super()
    this._name = name
  }

  get name() {
    return this._name
  }

  getSize(): number {
    return this.directory.reduce((sum, entry) => sum + entry.getSize(), 0)
  }

  add(entry: Entry): void {
    this.directory.push(entry)
  }

  printList(prefix: string): void {
    console.log(`${prefix}/${this.toString()}`)
    for (const entry of this.directory) {
      entry.printList(`${prefix}/${this._name}`)
    }
  }
}
