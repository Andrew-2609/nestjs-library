import { Controller, Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(): string {
    return 'This action returns all products';
  }

  @Get(':id')
  getProduct(@Param() params): string {
    return `This action returns the project of id: ${params.id}`;
  }
}
