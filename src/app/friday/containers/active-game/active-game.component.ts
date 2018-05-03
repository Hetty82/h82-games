import { Component, OnInit, OnDestroy } from '@angular/core'
import { select, Store } from '@ngrx/store'

import { Subscription } from 'rxjs/Subscription'

import * as fromStore from '../../store'

import { GameDifficulty } from '../../models/friday-game.model'
import { GameRound, CardPiles, Battle, FridayGameDetails } from '../../models/friday-game-details.model'


@Component({
  selector: 'app-fr-active-game',
  styleUrls: ['./active-game.component.sass'],
  templateUrl: './active-game.component.html',
})
export class ActiveGameComponent implements OnInit, OnDestroy {
  activeGameId: number
  loadedGameId: number
  loading = false

  battle: Battle
  currentRound: GameRound
  difficulty: GameDifficulty
  lives: number
  piles: CardPiles
  playing = false

  subs$ = new Subscription()

  constructor(private store: Store<fromStore.State>) {
    this.subs$.add(this.store.pipe(
      select(fromStore.getActiveGameId),
    ).subscribe(activeId => {
      if (activeId && activeId !== this.loadedGameId) {
        this.store.dispatch(new fromStore.ResetActiveGameState())
        this.store.dispatch(new fromStore.LoadGameDetails(activeId))
      }
      this.activeGameId = activeId
    }))

    this.subs$.add(this.store.pipe(
      select(fromStore.getActiveGameState),
    ).subscribe(state => {
      this.battle = state.battle
      this.currentRound = state.currentRound
      this.difficulty = state.difficulty
      this.lives = state.lives
      this.loadedGameId = state.id
      this.piles = state.piles
      this.playing = state.playing
    }))

    this.subs$.add(this.store.pipe(
      select(fromStore.getGamesLoading),
    ).subscribe(loading => this.loading = loading))
 }

  ngOnInit() {
  }

  continue() {
    console.log('continue game')
    this.store.dispatch(new fromStore.Play())
  }

  save() {
    const saveGame: FridayGameDetails = {
      currentRound: this.currentRound,
      difficulty: this.difficulty,
      id: this.loadedGameId,
      lives: this.lives,

      battle: this.battle,
      piles: this.piles,
    }
    this.store.dispatch(new fromStore.Save(saveGame))
  }

  reset() {
    this.store.dispatch(new fromStore.ResetActiveGameState())
  }

  start() {
    this.store.dispatch(new fromStore.InitGame(this.difficulty))
  }

  ngOnDestroy() {
    console.log('destroy active game')
    this.save()
    this.reset()
    this.subs$.unsubscribe()
  }
}
