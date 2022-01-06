import { MacroCommand } from '../command/macroCommand'
import { Drawable } from './drawable'

// 二次元配列上で擬似的に描画を行う
export class DrawCanvas implements Drawable {
  private history: MacroCommand
  private readonly shape = 'o' // 二次元配列上で描画する文字
  private canvas: string[][] = [
    Array(3).fill('x'),
    Array(3).fill('x'),
    Array(3).fill('x'),
  ]

  constructor(history: MacroCommand) {
    this.history = history
  }

  repaint() {
    this.history.execute()
  }

  draw(x: number, y: number): void {
    if (x < 0 || x >= 3 || y < 0 || y >= 3) {
      return
    }
    this.canvas[x][y] = this.shape
  }

  clear() {
    this.canvas = [Array(3).fill('x'), Array(3).fill('x'), Array(3).fill('x')]
  }

  print() {
    console.log(this.canvas.join(`\n`))
    console.log('')
  }
}
