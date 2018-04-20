import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'

import * as fromStore from '../../store'
import { Game } from '../../models/game.model'


@Component({
  selector: 'app-fr-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.sass']
})
export class GamesComponent implements OnInit {
  gamesState$ = this.store.pipe(select(fromStore.getGamesState))
  user$ = this.store.pipe(select(fromStore.getCurrentUser))

  constructor(private store: Store<fromStore.State>) {
  }

  ngOnInit() {
  }

  createGame(userId) {
    this.store.dispatch(new fromStore.CreateGame(new Game(userId)))
  }

  selectGame(event) {
    console.log('let\'s select a game')
  }
}
