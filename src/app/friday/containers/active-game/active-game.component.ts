import { Component, OnInit, OnDestroy } from '@angular/core'
import { select, Store } from '@ngrx/store'

import { Subscription } from 'rxjs/Subscription'

import * as fromStore from '../../store'

import { GameRound } from '../../models/friday-game-details.model'
import { GameDifficulty } from '../../models/friday-game.model'


@Component({
  selector: 'app-fr-active-game',
  styleUrls: ['./active-game.component.sass'],
  templateUrl: './active-game.component.html',
})
export class ActiveGameComponent implements OnInit, OnDestroy {
  difficulty: GameDifficulty
  gameId: number
  loading = false
  round: GameRound

  subs$ = new Subscription()


  constructor(private store: Store<fromStore.State>) {
    this.subs$.add(this.store.pipe(
      select(fromStore.getActiveGameState),
    ).subscribe(state => {
      this.difficulty = state.difficulty
      this.gameId = state.id
      this.round = state.currentRound
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
    this.store.dispatch(new fromStore.InitGame(this.difficulty))
  }

  ngOnDestroy() {
    this.subs$.unsubscribe()
  }
}
