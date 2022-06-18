import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './book.model';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book) private bookModel: typeof Book) {}

  async getBooks(): Promise<Book[]> {
    return this.bookModel.findAll();
  }

  async getBook(id: number): Promise<Book> {
    return this.bookModel.findByPk(id);
  }

  async createBook(book: Book): Promise<Book> {
    return this.bookModel.create(book);
  }

  async updateBook(book: Book): Promise<[number]> {
    return this.bookModel.update(book, {
      where: { id: book.id },
    });
  }

  async deleteBook(id: number): Promise<void> {
    const foundBook = await this.getBook(id);
    foundBook.destroy();
  }
}
