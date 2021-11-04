import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actions }                                 from '@ngneat/effects-ng';
import { removeCartItem }                          from '../+state/product/product.actions';
import { CartItem, Product, ProductRepository }    from '../+state/product/product.repository';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Output() closeCart = new EventEmitter();

  constructor(
    public productsRepository: ProductRepository,
    private actions$: Actions
  ) {
  }

  ngOnInit(): void {
    this.productsRepository.cartItems$.subscribe(console.log);
  }

  onRemoveCartItem(cartItem: CartItem & Product) {
    this.actions$.dispatch(removeCartItem(cartItem));
  }
}
