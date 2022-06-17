import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [
    new Product('BK01', 'The Call of Cthulhu', 9.9),
    new Product('BK02', 'The Dunwich Horror', 11.5),
    new Product('BK03', 'The Hounds of Baskervilles', 10.5),
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products[id];
  }

  createProduct(product: Product): Product {
    this.products.push(product);
    return product;
  }

  updateProduct(id: number, product: Product): Product {
    this.products[id] = product;
    return product;
  }

  deleteProduct(id: number): void {
    this.products.splice(id, 1);
  }
}
