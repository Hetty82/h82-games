import { Component, OnInit, OnDestroy } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Subscription } from 'rxjs/Subscription'
import { take, filter } from 'rxjs/operators'

import * as fromStore from '../../store'

import { GameDifficulty } from '../../models/game.interfaces'


@Component({
  selector: 'app-fr-active-game',
  styleUrls: ['./active-game.component.sass'],
  templateUrl: './active-game.component.html',
})
export class ActiveGameComponent implements OnInit, OnDestroy {
  routerGameId: number
  activeGameId: number
  difficulty: GameDifficulty

  loading$ = this.store.pipe(select(fromStore.getGamesLoading))
  playing$ = this.store.pipe(select(fromStore.getActiveGamePlaying))

  currentRound$ = this.store.pipe(select(fromStore.getActiveGameRound))
  lives$ = this.store.pipe(select(fromStore.getActiveGameLives))
  maxLives$ = this.store.pipe(select(fromStore.getActiveGameMaxLives))

  hazardEntities$ = this.store.pipe(select(fromStore.getHazardCardEntities))
  agingEntities$ = this.store.pipe(select(fromStore.getAgingCardEntities))
  robinsonEntities$ = this.store.pipe(select(fromStore.getRobinsonCardEntities))
  pirateEntities$ = this.store.pipe(select(fromStore.getPirateCardEntities))

  hazardComboEntities$ = this.store.pipe(select(fromStore.getHazardComboEntities))
  battleComboEntities$ = this.store.pipe(select(fromStore.getBattleComboEntities))

  destroyed$ = this.store.pipe(select(fromStore.getDestroyedCardIds))
  agings$ = this.store.pipe(select(fromStore.getAgingCardDeck))
  robinsons$ = this.store.pipe(select(fromStore.getRobinsonCardDeck))
  robinsonsDiscarded$ = this.store.pipe(select(fromStore.getRobinsonDiscardPile))

  hazardOptions$ = this.store.pipe(select(fromStore.getHazardCardOptions))
  hazards$ = this.store.pipe(select(fromStore.getHazardCardDeck))
  hazardsDiscarded$ = this.store.pipe(select(fromStore.getHazardDiscardPile))

  pirates$ = this.store.pipe(select(fromStore.getPirateCardIds))

  playedHazard$ = this.store.pipe(select(fromStore.getPlayedHazardCardId))

  availableActions: string[] = []

  subscriptions$ = new Subscription()

  constructor(private store: Store<fromStore.State>) {
    this.store.pipe(
      select(fromStore.getCardsLoaded),
      take(1),
    ).subscribe(loaded => {
      if (!loaded) this.store.dispatch(new fromStore.LoadCards())
    })

    // Active game id from router
    this.subscriptions$.add(this.store.pipe(
      select(fromStore.getRouterGameId),
    ).subscribe(routerGameId => {
      if (routerGameId && routerGameId !== this.activeGameId) {
        if (this.activeGameId) this.save()

        this.store.dispatch(new fromStore.ResetActiveGame())
        this.store.dispatch(new fromStore.LoadGameDetails(routerGameId))
      }
      this.routerGameId = routerGameId
    }))

    this.subscriptions$.add(this.store.pipe(
      select(fromStore.getAvailableActions),
      filter(item => !!item),
    ).subscribe(actions => this.availableActions = actions))

    this.subscriptions$.add(this.store.pipe(
      select(fromStore.getActiveGameDifficulty),
    ).subscribe(difficulty => this.difficulty = difficulty))
 }

  ngOnInit() {
  }

  drawHazardCards() {
    if (this.availableActions.includes(fromStore.DRAW_HAZARDS)) {
      this.store.dispatch(new fromStore.DrawHazards())
    }
  }

  playHazardCard(id) {
    if (this.availableActions.includes(fromStore.PLAY_HAZARD)) {
      this.store.dispatch(new fromStore.PlayHazard(id))
    }
  }

  continue() {
    this.store.dispatch(new fromStore.Play())
  }

  save() {
    this.store.dispatch(new fromStore.Save())
  }

  reset() {
    this.store.dispatch(new fromStore.ResetActiveGame())
  }

  start() {
    this.store.dispatch(new fromStore.InitGame(this.difficulty))
  }

  ngOnDestroy() {
    console.log('destroy active game')
    this.save()
    this.reset()
    this.subscriptions$.unsubscribe()
  }
}
