import { Book } from './book'
import { BookShelf } from './bookShelf'
import { Iterator } from './iterator'

export class BookShelfIterator implements Iterator<Book> {
  private bookShelf: BookShelf
  private index = 0
  constructor(bookShelf: BookShelf) {
    this.bookShelf = bookShelf
  }

  hasNext(): boolean {
    return this.index < this.bookShelf.length()
  }

  next(): Book {
    return this.bookShelf.getBookAt(this.index++)
  }
}
