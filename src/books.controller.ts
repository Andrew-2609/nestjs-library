import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from './book.model';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  async getBooks(): Promise<Book[]> {
    return this.bookService.getBooks();
  }

  @Get(':id')
  async getBook(@Param() params): Promise<Book> {
    return this.bookService.getBook(params.id);
  }

  @Post()
  async createBook(@Body() book: Book): Promise<Book> {
    return this.bookService.createBook(book);
  }

  @Put()
  async updateBook(@Body() book): Promise<[number]> {
    return this.bookService.updateBook(book);
  }

  @Delete(':id')
  async deleteBook(@Param() params): Promise<void> {
    this.bookService.deleteBook(params.id);
  }
}
