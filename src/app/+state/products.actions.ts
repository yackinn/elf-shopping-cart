import { actionsFactory, props } from '@ngneat/effects';
import { CartItem, Product }     from './products.repository';

export const productsActions = actionsFactory('products');

export const loadProducts = productsActions.create('Load Products');

export const addCartItem    = productsActions.create('Add Cart Item', props<Product>());
export const removeCartItem = productsActions.create('Remove Cart item', props<CartItem & Product>());
