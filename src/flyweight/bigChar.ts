import fs from 'fs'
import path from 'path'

export class BigChar {
  private font: string
  constructor(char: string) {
    try {
      const buf = fs.readFileSync(path.join(__dirname, `font/big${char}.txt`))
      this.font = buf.toString()
    } catch (e) {
      this.font = `${char}?`
    }
  }

  print() {
    console.log(this.font)
  }
}
