import { Injectable } from '@nestjs/common';
import { Book } from './book.model';

@Injectable()
export class BooksService {
  books: Book[] = [
    new Book('BK01', 'The Call of Cthulhu', 9.9),
    new Book('BK02', 'The Dunwich Horror', 11.5),
    new Book('BK03', 'The Hounds of Baskervilles', 10.5),
  ];

  getBooks(): Book[] {
    return this.books;
  }

  getBook(id: number): Book {
    return this.books[id];
  }

  createBook(book: Book): Book {
    this.books.push(book);
    return book;
  }

  updateBook(id: number, book: Book): Book {
    this.books[id] = book;
    return book;
  }

  deleteBook(id: number): void {
    this.books.splice(id, 1);
  }
}
