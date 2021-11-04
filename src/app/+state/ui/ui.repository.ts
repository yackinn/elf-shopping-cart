import { Injectable }                            from '@angular/core';
import { createState, select, Store, withProps } from '@ngneat/elf';
import { entitiesPropsFactory }                  from '@ngneat/elf-entities';

const {cartEntitiesRef, withCartEntities} = entitiesPropsFactory('cart');

export interface Snackbar {
  title: string;
  description: string;
  isShowing: boolean;
}

const {state, config} = createState(
  withProps<Snackbar>({title: '', description: '', isShowing: false})
);

const store = new Store({name: 'ui', config, state});

@Injectable({providedIn: 'root'})
export class UiRepository {
  snackbar$ = store.pipe(select(({title, description, isShowing}) => ({title, description, isShowing})));

  updateSnackbar(snackbar: Partial<Snackbar>) {
    store.update(state => ({
      ...state,
      ...snackbar
    }));
  }
}
