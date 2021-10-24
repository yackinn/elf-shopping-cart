import { Component, OnInit }           from '@angular/core';
import { Actions }                     from '@ngneat/effects-ng';
import { addToCart, loadProducts }     from '../+state/products.actions';
import { Product, ProductsRepository } from '../+state/products.repository';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(
    private actions: Actions,
    public productsRepository: ProductsRepository
  ) {
  }

  ngOnInit(): void {
    this.actions.dispatch(loadProducts());
  }

  onAddToCart(product: Product) {
    this.actions.dispatch(addToCart(product));
  }
}
