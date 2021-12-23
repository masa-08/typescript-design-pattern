import { Display } from './display'

export class CharDisplay extends Display {
  private readonly char: string
  constructor(char: string) {
    super()
    this.char = char
  }

  open() {
    process.stdout.write('<<')
  }
  print() {
    process.stdout.write(this.char)
  }
  close() {
    console.log('>>')
  }
}
