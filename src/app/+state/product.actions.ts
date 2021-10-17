import { actionsFactory } from '@ngneat/effects';

export const productActions = actionsFactory('product');

export const loadProducts = productActions.create('Load Products');
