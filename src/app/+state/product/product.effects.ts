import { Injectable }                                from '@angular/core';
import { createEffect, ofType }                      from '@ngneat/effects';
import { map }                                       from 'rxjs';
import { switchMap, tap }                            from 'rxjs/operators';
import { showSnackbar }                              from '../ui/ui.actions';
import { addCartItem, loadProducts, removeCartItem } from './product.actions';
import { ProductApi }                                from './product.api';
import { ProductRepository }                         from './product.repository';

@Injectable({providedIn: 'root'})
export class ProductEffects {

  loadProducts$ = createEffect(actions => actions.pipe(
    ofType(loadProducts),
    switchMap(() => this.productsApi.loadProducts()),
    tap(products => this.productsRepository.addProducts(products))
  ));

  addCartItem$ = createEffect(actions => actions.pipe(
    ofType(addCartItem),
    tap(product => this.productsRepository.addCartItem(product.id)),
    map(product => showSnackbar({title: 'Successfully added product', description: product.title}))
  ), {dispatch: true});

  removeCartItem$ = createEffect(actions => actions.pipe(
    ofType(removeCartItem),
    tap(cartItem => this.productsRepository.removeCartItem(cartItem.id))
  ));

  constructor(
    private productsRepository: ProductRepository,
    private productsApi: ProductApi
  ) {
  }
}
