import { Component, OnInit } from '@angular/core';
import { select }            from '@ngneat/elf';
import { Observable }        from 'rxjs';
import { UiRepository }      from '../+state/ui/ui.repository';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  title: Observable<string>;
  description: Observable<string>;
  isShowing: Observable<boolean>;

  constructor(
    public uiRepository: UiRepository
  ) { }

  ngOnInit(): void {
    this.title       = this.uiRepository.snackbar$.pipe(select(state => state.title));
    this.description = this.uiRepository.snackbar$.pipe(select(state => state.description));
    this.isShowing   = this.uiRepository.snackbar$.pipe(select(state => state.isShowing));
  }
}
