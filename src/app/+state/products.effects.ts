import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngneat/effects';
import { loadProducts } from './products.actions';
import { ProductsApi } from './products.api';
import { switchMap, tap } from 'rxjs/operators';
import { ProductsRepository } from './products.repository';

@Injectable({ providedIn: 'root' })
export class ProductsEffects {

  constructor(
    private productsRepository: ProductsRepository,
    private productsApi: ProductsApi,
  ) {
  }

  loadProducts$ = createEffect(actions => actions.pipe(
    ofType(loadProducts),
    switchMap(() => this.productsApi.loadProducts()),
    tap(products => this.productsRepository.addProducts(products))
  ));
}
