import { actionsFactory, props } from '@ngneat/effects';
import { CartItem, Product }     from './product.repository';

const productActions = actionsFactory('products');

export const loadProducts = productActions.create('Load Products');

export const addCartItem    = productActions.create('Add Cart Item', props<Product>());
export const removeCartItem = productActions.create('Remove Cart item', props<CartItem & Product>());
