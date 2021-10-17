import { Injectable }           from '@angular/core';
import { createEffect, ofType } from '@ngneat/effects';
import { loadProducts }         from './product.actions';
import { ProductService }       from '../product.service';
import { switchMap }            from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductEffects {

  constructor(
    private productsService: ProductService,
  ) {
  }

  loadProducts$ = createEffect(actions => actions.pipe(
    ofType(loadProducts),
    switchMap(() => this.productsService.loadProducts())
  ));
}
