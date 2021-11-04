import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem, Product }                      from '../../+state/product/product.repository';

@Component({
  selector: 'cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.scss']
})
export class CartListItemComponent {
  @Input() cartItem: CartItem & Product;
  @Output() removeItem = new EventEmitter<CartItem & Product>();
}
