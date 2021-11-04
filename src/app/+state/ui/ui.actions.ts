import { actionsFactory, props } from '@ngneat/effects';
import { Snackbar }              from './ui.repository';

const uiActions = actionsFactory('ui');

export const showSnackbar = uiActions.create('Show Snackbar', props<Omit<Snackbar, "isShowing">>());

