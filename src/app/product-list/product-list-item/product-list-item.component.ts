import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product }                                        from '../../+state/product/product.repository';

@Component({
  selector: 'product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  @Input() product: Product;
  @Output() addToCart = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit(): void {
  }
}
