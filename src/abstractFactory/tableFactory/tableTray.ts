import { Tray } from '../factory/tray'

export class TableTray extends Tray {
  makeHTML(): string {
    const buffer: string[] = []
    buffer.push('<td>')
    buffer.push('<table width="100%" border="1"><tr>')
    buffer.push(
      `<td bgcolor="#cccccc" align="center" colspan="${this.tray.length}"><b>${this.caption}</b></td>`
    )
    buffer.push('</tr>\n')
    buffer.push('<tr>\n')
    for (const item of this.tray) {
      buffer.push(item.makeHTML())
    }
    buffer.push('</tr></table>')
    buffer.push('</td>')

    return buffer.join('')
  }
}
