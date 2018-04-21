import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'

import { take, filter, withLatestFrom } from 'rxjs/operators'

import * as fromStore from '../../store'

import { FridayGame } from '../../models/friday-game.model'
import { User } from '../../../core/models/user.interface'


@Component({
  selector: 'app-fr-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.sass'],
})
export class GamesComponent implements OnInit {
  games$ = this.store.pipe(select(fromStore.getGames))
  user: User

  constructor(private store: Store<fromStore.State>) {
    this.store.pipe(select(fromStore.getCurrentUser),
      take(1),
      withLatestFrom(this.store.pipe(select(fromStore.getGamesLoaded))),
    ).subscribe(([user, loaded]) => {
      this.user = user
      if (user && !loaded) this.store.dispatch(new fromStore.LoadGames(this.user.id))
    })
  }

  ngOnInit() {
  }

  createGame(userId) {
    this.store.dispatch(new fromStore.CreateGame(new FridayGame(userId)))
  }

  deleteGame(gameId) {
    this.store.dispatch(new fromStore.DeleteGame(gameId))
  }

  selectGame(event) {
    console.log('let\'s select a game')
  }
}
