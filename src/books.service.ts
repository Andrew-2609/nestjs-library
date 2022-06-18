import { Injectable } from '@nestjs/common';
import { Book } from './book.model';

@Injectable()
export class BooksService {
  books: Book[] = [];

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
