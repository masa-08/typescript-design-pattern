import { Builder } from './builder'
import fs from 'fs'

export class HTMLBuilder extends Builder {
  private filename: string = ''
  private fd: number = 0

  makeTitle(title: string): void {
    this.filename = `${title}.html`
    try {
      this.fd = fs.openSync(this.filename, 'w')
    } catch (e: any) {
      console.log(e.message)
    }
    fs.writeSync(this.fd, `<html><head><title>${title}</title></head><body>`)
    fs.writeSync(this.fd, `<h1>${title}</h1>`)
  }

  makeString(str: string): void {
    fs.writeSync(this.fd, `<p>${str}</p>`)
  }

  makeItems(items: string[]): void {
    fs.writeSync(this.fd, '<ul>')
    for (const item of items) {
      fs.writeSync(this.fd, `<li>${item}</li>`)
    }
    fs.writeSync(this.fd, '</ul>')
  }

  close(): void {
    fs.writeSync(this.fd, '</body></html>')
    fs.closeSync(this.fd)
  }

  getResult(): string {
    return this.filename
  }
}
