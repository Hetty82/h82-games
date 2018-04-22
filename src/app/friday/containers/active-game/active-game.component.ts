import { Component, OnInit, OnDestroy } from '@angular/core'
import { select, Store } from '@ngrx/store'

import { Subscription } from 'rxjs/Subscription'

import * as fromStore from '../../store'
import { State } from '../../store/reducers/active-game.reducer'

import { FridayGameDetails } from '../../models/friday-game-details.model'


@Component({
  selector: 'app-fr-active-game',
  styleUrls: ['./active-game.component.sass'],
  templateUrl: './active-game.component.html',
})
export class ActiveGameComponent implements OnInit, OnDestroy {
  activeId: number
  game: FridayGameDetails
  loading = false
  state: State

  subs$ = new Subscription()


  constructor(private store: Store<fromStore.State>) {
    this.subs$.add(this.store.pipe(
      select(fromStore.getActiveGameState),
    ).subscribe(state => {
      this.state = state
      this.activeId = state.id
      this.game = state.details
    }))

    this.subs$.add(this.store.pipe(
      select(fromStore.getGamesLoading),
    ).subscribe(loading => this.loading = loading))
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
