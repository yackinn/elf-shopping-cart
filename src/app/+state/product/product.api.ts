import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product }    from './product.repository';

@Injectable({ providedIn: 'root' })
export class ProductApi {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  loadProducts() {
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products');
  }
}
