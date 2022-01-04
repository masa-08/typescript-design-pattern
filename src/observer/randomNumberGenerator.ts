import { NumberGenerator } from './numberGenerator'

export class RandomNumberGenerator extends NumberGenerator {
  private readonly max = 50
  private random: number = this.getRandom()

  getNumber(): number {
    return this.random
  }

  execute() {
    Array(20)
      .fill(0)
      .forEach(() => {
        this.random = this.getRandom()
        this.notify()
      })
  }

  private getRandom(): number {
    return Math.floor(Math.random() * this.max)
  }
}
