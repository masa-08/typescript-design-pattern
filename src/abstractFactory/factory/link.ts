import { Item } from './item'

export abstract class Link extends Item {
  protected readonly url: string
  constructor(caption: string, url: string) {
    super(caption)
    this.url = url
  }
}
