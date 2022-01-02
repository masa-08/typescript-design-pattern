import { Entry } from './entry'
import { Visitor } from './visitor'

export class Directory extends Entry {
  private readonly _name: string
  private _directory: Entry[] = []
  constructor(name: string) {
    super()
    this._name = name
  }

  get name() {
    return this._name
  }

  get directory() {
    return this._directory
  }

  getSize(): number {
    return this._directory.reduce((sum, entry) => sum + entry.getSize(), 0)
  }

  add(entry: Entry): void {
    this._directory.push(entry)
  }

  printList(prefix: string): void {
    console.log(`${prefix}/${this.toString()}`)
    for (const entry of this._directory) {
      entry.printList(`${prefix}/${this._name}`)
    }
  }

  accept(v: Visitor): void {
    v.visit(this)
  }
}
