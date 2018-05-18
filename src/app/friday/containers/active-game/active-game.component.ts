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

  hazardCardEntities$ = this.store.pipe(select(fromStore.getHazardCardEntities))
  agingCardEntities$ = this.store.pipe(select(fromStore.getAgingCardEntities))
  robinsonCardEntities$ = this.store.pipe(select(fromStore.getRobinsonCardEntities))
  pirateCardEntities$ = this.store.pipe(select(fromStore.getPirateCardEntities))

  hazardComboEntities$ = this.store.pipe(select(fromStore.getHazardComboEntities))
  battleComboEntities$ = this.store.pipe(select(fromStore.getBattleComboEntities))

  destroyedCardIds$ = this.store.pipe(select(fromStore.getDestroyedCardIds))
  agingCardDeck$ = this.store.pipe(select(fromStore.getAgingCardDeck))
  robinsoncardDeck$ = this.store.pipe(select(fromStore.getRobinsonCardDeck))
  robinsonsDiscardPile$ = this.store.pipe(select(fromStore.getRobinsonDiscardPile))

  hazardOptions$ = this.store.pipe(select(fromStore.getHazardCardOptions))
  hazardCardDeck$ = this.store.pipe(select(fromStore.getHazardCardDeck))
  hazardDiscardPile$ = this.store.pipe(select(fromStore.getHazardDiscardPile))

  pirateCardIds$ = this.store.pipe(select(fromStore.getPirateCardIds))

  playedHazardCardId$ = this.store.pipe(select(fromStore.getPlayedHazardCardId))
  playedFreeBattleComboIds$ = this.store.pipe(select(fromStore.getPlayedFreeBattleComboIds))
  playedPaidBattleComboIds$ = this.store.pipe(select(fromStore.getPlayedPaidBattleComboIds))

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
    if (this.availableActions.includes(fromStore.InnerGameActionTypes.DRAW_HAZARDS)) {
      this.store.dispatch(new fromStore.DrawHazards())
    }
  }

  playFreeBattleCard() {
    if (this.availableActions.includes(fromStore.InnerGameActionTypes.PLAY_FREE_BATTLE_CARD)) {
      this.store.dispatch(new fromStore.PlayFreeBattleCard())
    }
  }

  playPaidBattleCard() {
    if (this.availableActions.includes(fromStore.InnerGameActionTypes.PLAY_PAID_BATTLE_CARD)) {
      this.store.dispatch(new fromStore.PlayPaidBattleCard())
    }
  }

  playHazardCard(id) {
    if (this.availableActions.includes(fromStore.InnerGameActionTypes.PLAY_HAZARD)) {
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
