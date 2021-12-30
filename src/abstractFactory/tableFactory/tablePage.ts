import { Page } from '../factory/page'

export class TablePage extends Page {
  makeHTML(): string {
    const buffer: string[] = []
    buffer.push(`<html><head><title>${this.title}</title></head>\n`)
    buffer.push('<body>\n')
    buffer.push(`<h1>${this.title}</h1>\n`)
    buffer.push('<table width="80%" border="3">\n')
    for (const item of this.content) {
      buffer.push(item.makeHTML())
    }
    buffer.push('</table>\n')
    buffer.push(`<hr><address>${this.author}</address>`)
    buffer.push('</body></html>\n')

    return buffer.join('')
  }
}
