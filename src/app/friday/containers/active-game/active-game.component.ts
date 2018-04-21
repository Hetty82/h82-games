import { Component, OnInit, OnDestroy } from '@angular/core'
import { select, Store } from '@ngrx/store'

import { Subscription } from 'rxjs/Subscription'

import * as fromStore from '../../store'

import { State } from '../../store/reducers/active-game.reducer'


@Component({
  selector: 'app-fr-active-game',
  templateUrl: './active-game.component.html',
  styleUrls: ['./active-game.component.sass'],
})
export class ActiveGameComponent implements OnInit, OnDestroy {
  game: State
  subs$ = new Subscription()

  constructor(private store: Store<fromStore.State>) {
    this.subs$.add(
      this.store.pipe(select(fromStore.getActiveGameState))
        .subscribe(game => {
          this.game = game
        }),
    )
  }

  ngOnInit() {
  }

  continue() {
    console.log('continue game')
    // this.store.dispatch(new fromStore.PlayGame(this.game.id))
  }

  reset() {
    this.store.dispatch(new fromStore.ResetActiveGameState())
  }

  start() {
    console.log('start game')
    // this.store.dispatch(new fromStore.InitGame(this.game.id))
  }


  ngOnDestroy() {
    this.subs$.unsubscribe()
  }
}
