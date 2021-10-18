import { actionsFactory } from '@ngneat/effects';

export const productsActions = actionsFactory('products');

export const loadProducts = productsActions.create('Load Products');
