import { Link } from './link'
import { Page } from './page'
import { Tray } from './tray'

export abstract class Factory {
  // 文字列で指定したクラスを作成する、というシチュエーションがあまり思い浮かばなかったので、
  // Factoryクラスを継承したサブクラスを指定して、生成するというロジックに変更した
  static getFactory<T extends Factory>(ConcreteFactory: {
    new (): T
  }): Factory {
    return new ConcreteFactory()
  }

  abstract createLink(caption: string, url: string): Link
  abstract createTray(caption: string): Tray
  abstract createPage(title: string, author: string): Page
}
