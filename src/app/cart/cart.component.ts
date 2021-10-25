import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartItem, Product, ProductsRepository }   from '../+state/products.repository';
import { Actions }                                 from '@ngneat/effects-ng';
import { removeCartItem }                          from '../+state/products.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Output() closeCart = new EventEmitter();

  constructor(
    public productsRepository: ProductsRepository,
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
