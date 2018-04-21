import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'

import * as fromStore from '../../store'


@Component({
  selector: 'app-fr-active-game',
  templateUrl: './active-game.component.html',
  styleUrls: ['./active-game.component.sass'],
})
export class ActiveGameComponent implements OnInit {
  activeGameState$ = this.store.pipe(select(fromStore.getActiveGameState))

  constructor(private store: Store<fromStore.State>) {
  }

  ngOnInit() {
  }

}
