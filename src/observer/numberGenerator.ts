import { Observer } from './observer'

export abstract class NumberGenerator {
  private observers: Observer[] = []

  add(observer: Observer) {
    this.observers = this.observers.concat(observer)
  }

  delete(observer: Observer) {
    this.observers = this.observers.filter((o) => o !== observer)
  }

  notify() {
    this.observers.forEach((o) => o.update(this))
  }

  abstract getNumber(): number
  abstract execute(): void
}
