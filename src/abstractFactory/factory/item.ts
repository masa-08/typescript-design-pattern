export abstract class Item {
  protected readonly caption: string
  constructor(caption: string) {
    this.caption = caption
  }

  abstract makeHTML(): string
}
