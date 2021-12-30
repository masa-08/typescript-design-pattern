import { Page } from '../factory/page'

export class ListPage extends Page {
  makeHTML(): string {
    const buffer: string[] = []
    buffer.push(`<html><head><title>${this.title}</title></head>\n`)
    buffer.push('<body>\n')
    buffer.push(`<h1>${this.title}</h1>\n`)
    buffer.push('<ul>\n')
    for (const item of this.content) {
      buffer.push(item.makeHTML())
    }
    buffer.push('</ul>\n')
    buffer.push(`<hr><address>${this.author}</address>`)
    buffer.push('</body></html>\n')

    return buffer.join('')
  }
}
