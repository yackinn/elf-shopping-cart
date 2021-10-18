import { Component, OnInit } from '@angular/core';
import { Actions } from '@ngneat/effects-ng';
import { loadProducts } from '../+state/products.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private actions: Actions) {
  }

  ngOnInit(): void {
    this.actions.dispatch(loadProducts());
  }

}
