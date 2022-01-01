import { Entry } from './entry'

export class File extends Entry {
  private readonly _name: string
  private readonly size: number
  constructor(name: string, size: number) {
    super()
    this._name = name
    this.size = size
  }

  get name() {
    return this._name
  }

  getSize(): number {
    return this.size
  }

  printList(prefix: string): void {
    console.log(`${prefix}/${this.toString()}`)
  }
}
