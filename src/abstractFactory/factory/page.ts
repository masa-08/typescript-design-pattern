import fs from 'fs'
import { Item } from './item'

export abstract class Page {
  protected readonly title: string
  protected readonly author: string
  protected content: Item[] = []
  constructor(title: string, author: string) {
    this.title = title
    this.author = author
  }

  add(item: Item): void {
    this.content.push(item)
  }

  output(): void {
    try {
      const filename = `${this.title}.html`
      fs.writeFileSync(filename, this.makeHTML())
      console.log(`${filename}を作成しました`)
    } catch (e) {
      console.log(e)
    }
  }

  abstract makeHTML(): string
}
