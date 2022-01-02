import { Trouble } from './trouble'

export abstract class Support {
  private readonly name: string
  private next?: Support
  constructor(name: string) {
    this.name = name
  }

  setNext(next: Support): Support {
    this.next = next
    return next
  }

  support(trouble: Trouble) {
    if (this.resolve(trouble)) {
      this.done(trouble)
    } else if (this.next != null) {
      this.next.support(trouble)
    } else {
      this.fail(trouble)
    }
  }

  toString() {
    return `[${this.name}]`
  }

  protected abstract resolve(trouble: Trouble): boolean

  protected done(trouble: Trouble) {
    console.log(`${trouble} is resolved by ${this}.`)
  }

  protected fail(trouble: Trouble) {
    console.log(`${trouble} cannot be resolved.`)
  }
}
