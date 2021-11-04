import { Component, OnInit }          from '@angular/core';
import { Actions }                    from '@ngneat/effects-ng';
import { addCartItem, loadProducts }  from '../+state/product/product.actions';
import { Product, ProductRepository } from '../+state/product/product.repository';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(
    private actions: Actions,
    public productsRepository: ProductRepository
  ) {
  }

  ngOnInit(): void {
    this.actions.dispatch(loadProducts());
  }

  onAddToCart(product: Product) {
    this.actions.dispatch(addCartItem(product));
  }
}
