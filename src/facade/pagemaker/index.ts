import { Database } from './database'
import { HtmlWriter } from './htmlWriter'

export class PageMaker {
  static makeWelcomePage(addr: string, filename: string) {
    const props = Database.getProperties('maildata')
    if (props == null) {
      return
    }
    const username = props[addr]
    const writer = new HtmlWriter(filename)
    writer.title(`Welecom to ${username}'s page!`)
    writer.paragraph(`${username}のページへようこそ。`)
    writer.paragraph('メールまっていますね。')
    writer.mailto(addr, username)
    writer.close()
  }
}
