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
  getBooks(): Book[] {
    return this.bookService.getBooks();
  }

  @Get(':id')
  getBook(@Param() params): Book {
    return this.bookService.getBook(params.id);
  }

  @Post()
  createBook(@Body() book: Book): Book {
    return this.bookService.createBook(book);
  }

  @Put(':id')
  updateBook(@Param() params, @Body() book: Book): Book {
    return this.bookService.updateBook(params.id, book);
  }

  @Delete(':id')
  deleteBook(@Param() params): void {
    this.bookService.deleteBook(params.id);
  }
}
