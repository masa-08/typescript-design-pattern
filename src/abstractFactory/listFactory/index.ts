import { Factory } from '../factory'
import { Link } from '../factory/link'
import { Tray } from '../factory/tray'
import { ListLink } from './listLink'
import { ListTray } from './listTray'
import { ListPage } from './listPage'
import { Page } from '../factory/page'

export class ListFactory extends Factory {
  createLink(caption: string, url: string): Link {
    return new ListLink(caption, url)
  }

  createTray(caption: string): Tray {
    return new ListTray(caption)
  }

  createPage(title: string, author: string): Page {
    return new ListPage(title, author)
  }
}
