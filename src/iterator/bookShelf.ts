import { Aggregate } from './aggregate'
import { Book } from './book'
import { BookShelfIterator } from './bookShelfIterator'
import { Iterator } from './iterator'

export class BookShelf implements Aggregate<Book> {
  private books: Book[] = []
  private last = 0
  private readonly _maxSize: number
  constructor(maxSize: number) {
    this._maxSize = maxSize
  }

  get maxSize(): number {
    return this._maxSize
  }

  iterator(): Iterator<Book> {
    return new BookShelfIterator(this)
  }

  getBookAt(index: number): Book {
    return this.books[index]
  }

  append(book: Book): void {
    if (this.length() >= this._maxSize) {
      console.log('これ以上追加できません')
      return
    }
    this.books.push(book)
    this.last++
  }

  length(): number {
    return this.last
  }
}
