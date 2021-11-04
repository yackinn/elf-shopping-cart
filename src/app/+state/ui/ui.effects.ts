import { Injectable }           from '@angular/core';
import { createEffect, ofType } from '@ngneat/effects';
import { tap }                  from 'rxjs';
import { showSnackbar }         from './ui.actions';
import { UiRepository }         from './ui.repository';

@Injectable({providedIn: 'root'})
export class UiEffects {

  showSnackbar$ = createEffect(actions => actions.pipe(
    ofType(showSnackbar),
    tap(snackbar => this.uiRepository.updateSnackbar({...snackbar, isShowing: true}))
  ));

  constructor(
    private uiRepository: UiRepository
  ) {
  }
}
