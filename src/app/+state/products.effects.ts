import { Injectable }                                from '@angular/core';
import { createEffect, ofType }                      from '@ngneat/effects';
import { addCartItem, loadProducts, removeCartItem } from './products.actions';
import { ProductsApi }                               from './products.api';
import { switchMap, tap }                            from 'rxjs/operators';
import { ProductsRepository }                        from './products.repository';

@Injectable({ providedIn: 'root' })
export class ProductsEffects {

  loadProducts$ = createEffect(actions => actions.pipe(
    ofType(loadProducts),
    switchMap(() => this.productsApi.loadProducts()),
    tap(products => this.productsRepository.addProducts(products))
  ));

  addCartItem$ = createEffect(actions => actions.pipe(
    ofType(addCartItem),
    tap(product => this.productsRepository.updateCart(product.id))
  ));

  removeCartItem$ = createEffect(actions => actions.pipe(
    ofType(removeCartItem),
    tap(cartItem => this.productsRepository.removeCartItem(cartItem.id))
  ));

  constructor(
    private productsRepository: ProductsRepository,
    private productsApi: ProductsApi,
  ) {
  }
}
