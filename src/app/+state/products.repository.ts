import { createState, Store } from '@ngneat/elf';
import {
  addEntities,
  deleteEntities,
  entitiesPropsFactory,
  selectAll,
  selectEntities,
  upsertEntities,
  withEntities
}                             from '@ngneat/elf-entities';
import { Injectable }         from '@angular/core';
import { combineLatest, map } from 'rxjs';

const { cartEntitiesRef, withCartEntities } = entitiesPropsFactory('cart');

export interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

export interface CartItem {
  id: Product['id'];
  quantity: number;
}

const { state, config } = createState(
  withEntities<Product>(),
  withCartEntities<CartItem>()
);

const store = new Store({ name: 'products', config, state });

@Injectable({ providedIn: 'root' })
export class ProductsRepository {
  products$  = store.pipe(selectAll());
  cartItems$ = combineLatest([
    store.pipe(selectEntities()),
    store.pipe(selectAll({ ref: cartEntitiesRef }))
  ]).pipe(
    map(([products, cartItems]) => cartItems.map(cartItem => ({ ...products[cartItem.id], ...cartItem })))
  );

  addProducts(products: Product[]) {
    store.update(addEntities(products));
  }

  updateCart(id: Product['id']) {
    store.update(upsertEntities(id, {
      updater: (entity) => ({ ...entity, quantity: entity.quantity + 1 }),
      creator: (id) => ({ id, quantity: 1 }),
      ref: cartEntitiesRef
    }));
  }

  removeCartItem(id: Product['id']) {
    store.update(deleteEntities([id], { ref: cartEntitiesRef }));
  }
}
