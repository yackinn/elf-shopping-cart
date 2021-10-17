import { coerceArray, createState, Store }                            from '@ngneat/elf';
import { addEntities, entitiesPropsFactory, selectAll, withEntities } from '@ngneat/elf-entities';
import { Injectable }                                                 from '@angular/core';

const { cartEntitiesRef, withCartEntities } = entitiesPropsFactory('cart');

interface Product {
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

interface CartItem {
  id: Product['id'];
  quantity: number;
}

const { state, config } = createState(
  withEntities<Product>(),
  withCartEntities<CartItem>()
);

export const store = new Store({ name: 'products', config, state });

@Injectable({ providedIn: 'root' })
export class ProductRepository {
  products$ = store.pipe(selectAll());

  addProducts(product: Product | Product[]) {
    const products = coerceArray(product);
    store.update(addEntities(products));
  }
}
