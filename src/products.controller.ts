import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

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

  @Post()
  createProduct(@Body() product): string {
    console.log(product);
    return `This action adds a new product`;
  }

  @Put(':id')
  updateProduct(@Param() params, @Body() product): string {
    console.log(product);
    return `This action updates a product of id: ${params.id}`;
  }
}
