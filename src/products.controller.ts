import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './product.model';

@Controller('products')
export class ProductsController {
  products: Product[] = [
    new Product('BK01', 'The Call of Cthulhu', 9.9),
    new Product('BK02', 'The Dunwich Horror', 11.5),
    new Product('BK03', 'The Hounds of Baskervilles', 10.5),
  ];

  @Get()
  getProducts(): Product[] {
    return this.products;
  }

  @Get(':id')
  getProduct(@Param() params): Product {
    return this.products[params.id];
  }

  @Post()
  createProduct(@Body() product: Product) {
    this.products.push(product);
  }

  @Put(':id')
  updateProduct(@Param() params, @Body() product): string {
    console.log(product);
    return `This action updates a product of id: ${params.id}`;
  }

  @Delete(':id')
  deleteProduct(@Param() params): string {
    return `This action removes a product of id: ${params.id}`;
  }
}
