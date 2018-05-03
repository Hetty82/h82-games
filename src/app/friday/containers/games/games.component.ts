import { Component, OnInit, OnDestroy } from '@angular/core'
import { select, Store } from '@ngrx/store'

import { take, withLatestFrom } from 'rxjs/operators'
import { Subscription } from 'rxjs/Subscription'

import * as fromStore from '../../store'

import { FridayGame, GameId, GameDifficulty } from '../../models/friday-game.model'
import { User } from '../../../core/models/user.interface'


@Component({
  selector: 'app-fr-games',
  styleUrls: ['./games.component.sass'],
  templateUrl: './games.component.html',
})
export class GamesComponent implements OnInit, OnDestroy {
  activeGameId: GameId
  loading = false
  user: User

  games$ = this.store.pipe(select(fromStore.getGames))
  subs$ = new Subscription()

  constructor(private store: Store<fromStore.State>) {
    this.store.pipe(
      select(fromStore.getCurrentUser),
      take(1),
      withLatestFrom(this.store.pipe(select(fromStore.getGamesLoaded))),
    ).subscribe(([user, loaded]) => {
      this.user = user
      if (user && !loaded) this.store.dispatch(new fromStore.LoadGames(this.user.id))
    })

    this.subs$.add(this.store.pipe(
      select(fromStore.getActiveGameId),
    ).subscribe(activeId => this.activeGameId = activeId))

    this.subs$.add(this.store.pipe(
      select(fromStore.getGamesLoading),
    ).subscribe(loading => this.loading = loading))
  }

  ngOnInit() {
  }

  createGame(userId: number, difficulty: GameDifficulty) {
    this.store.dispatch(new fromStore.CreateGame(new FridayGame(userId, difficulty)))
  }

  deleteGame(gameId) {
    this.store.dispatch(new fromStore.DeleteGame(gameId))
  }

  reset() {
    this.store.dispatch(new fromStore.ResetGamesState())
  }

  ngOnDestroy() {
    this.subs$.unsubscribe()
  }
}
