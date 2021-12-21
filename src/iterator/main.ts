import { Book } from './book'
import { BookShelf } from './bookShelf'
import { BookShelfIterator } from './bookShelfIterator'
import { Iterator } from './iterator'

const MAX_SIZE = 4
const bookShelf = new BookShelf(MAX_SIZE)
bookShelf.append(new Book('Book 1'))
bookShelf.append(new Book('Book 2'))
bookShelf.append(new Book('Book 3'))
bookShelf.append(new Book('Book 4'))

const iterator: Iterator<Book> = new BookShelfIterator(bookShelf)

while (iterator.hasNext()) {
  const book = iterator.next()
  console.log(book.name)
}
