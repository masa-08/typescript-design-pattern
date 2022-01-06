import { Command } from '../command/command'
import { Drawable } from './drawable'

type Position = {
  x: number
  y: number
}

export class DrawCommand implements Command {
  private drawable: Drawable
  private position: Position
  constructor(drawable: Drawable, position: Position) {
    this.drawable = drawable
    this.position = position
  }

  execute(): void {
    this.drawable.draw(this.position.x, this.position.y)
  }
}
