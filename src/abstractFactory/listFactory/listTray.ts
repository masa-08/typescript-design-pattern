import { Tray } from '../factory/tray'

export class ListTray extends Tray {
  makeHTML(): string {
    const buffer: string[] = []
    buffer.push('<li>\n')
    buffer.push(`${this.caption}\n`)
    buffer.push('<ul>\n')
    for (const item of this.tray) {
      buffer.push(item.makeHTML())
    }
    buffer.push('</ul>\n')
    buffer.push('</li>\n')

    return buffer.join('')
  }
}
