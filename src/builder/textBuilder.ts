import { Builder } from './builder'

export class TextBuilder extends Builder {
  private buffer: string[] = []

  makeTitle(title: string): void {
    this.buffer.push('====================================\n')
    this.buffer.push(`『${title}』\n\n`)
  }

  makeString(str: string): void {
    this.buffer.push(`■${str}\n\n`)
  }

  makeItems(items: string[]): void {
    for (const item of items) {
      this.buffer.push(` ・${item}\n`)
    }
    this.buffer.push('\n')
  }

  close(): void {
    this.buffer.push('====================================\n')
  }

  getResult(): string {
    return this.buffer.join('')
  }
}
