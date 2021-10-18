import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products.repository';

@Injectable({ providedIn: 'root' })
export class ProductsApi {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  loadProducts() {
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products')
  }
}
