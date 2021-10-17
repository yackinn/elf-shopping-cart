import { Injectable }        from '@angular/core';
import { HttpClient }        from '@angular/common/http';
import { Observable }        from 'rxjs';
import { tap }               from 'rxjs/operators';
import { ProductRepository } from './+state/product.repository';

interface ProductResponse {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor(
    private httpClient: HttpClient,
    private productRepository: ProductRepository
  ) {
  }

  loadProducts(): Observable<ProductResponse[]> {
    return this.httpClient.get<ProductResponse[]>('https://fakestoreapi.com/products').pipe(
      tap(products => this.productRepository.addProducts(products))
    );
  }
}
