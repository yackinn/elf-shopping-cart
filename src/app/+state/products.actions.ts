import { actionsFactory, props } from '@ngneat/effects';
import { Product }               from './products.repository';

export const productsActions = actionsFactory('products');

export const loadProducts = productsActions.create('Load Products');
export const addToCart    = productsActions.create('Add Product To Cart', props<Product>());
