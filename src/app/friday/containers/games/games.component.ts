import { Component, OnInit, OnDestroy } from '@angular/core'
import { select, Store } from '@ngrx/store'

import { take, withLatestFrom } from 'rxjs/operators'
import { Subscription } from 'rxjs/Subscription'

import * as fromStore from '../../store'

import { Game } from '../../models/game.model'
import { GameDifficulty } from '../../models/game.interfaces'
import { User } from '../../../core/models/user.interface'


@Component({
  selector: 'app-fr-games',
  styleUrls: ['./games.component.sass'],
  templateUrl: './games.component.html',
})
export class GamesComponent implements OnInit, OnDestroy {
  loading = false
  user: User

  games$ = this.store.pipe(select(fromStore.getGames))
  subscriptions$ = new Subscription()

  constructor(private store: Store<fromStore.State>) {
    this.store.pipe(
      select(fromStore.getCurrentUser),
      take(1),
      withLatestFrom(this.store.pipe(select(fromStore.getGamesLoaded))),
    ).subscribe(([user, loaded]) => {
      this.user = user
      if (user && !loaded) this.store.dispatch(new fromStore.LoadGames(this.user.id))
    })

    this.subscriptions$.add(this.store.pipe(
      select(fromStore.getGamesLoading),
    ).subscribe(loading => this.loading = loading))
  }

  ngOnInit() {
  }

  createGame(userId: number, difficulty: GameDifficulty) {
    this.store.dispatch(new fromStore.CreateGame(new Game(userId, difficulty)))
  }

  deleteGame(gameId) {
    this.store.dispatch(new fromStore.DeleteGame(gameId))
  }

  reset() {
    this.store.dispatch(new fromStore.ResetGamesState())
    this.store.dispatch(new fromStore.ResetCardsState())
  }

  ngOnDestroy() {
    this.subscriptions$.unsubscribe()
  }
}
