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
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getProducts(): Product[] {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProduct(@Param() params): Product {
    return this.productService.getProduct(params.id);
  }

  @Post()
  createProduct(@Body() product: Product): Product {
    return this.productService.createProduct(product);
  }

  @Put(':id')
  updateProduct(@Param() params, @Body() product: Product): Product {
    return this.productService.updateProduct(params.id, product);
  }

  @Delete(':id')
  deleteProduct(@Param() params): void {
    this.productService.deleteProduct(params.id);
  }
}
