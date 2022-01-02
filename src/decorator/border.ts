import { Display } from './display'

export abstract class Border extends Display {
  protected readonly display: Display
  constructor(display: Display) {
    super()
    this.display = display
  }
}
