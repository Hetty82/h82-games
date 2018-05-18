import { Component, OnInit, OnDestroy } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Subscription } from 'rxjs/Subscription'
import { take, filter } from 'rxjs/operators'

import * as fromStore from '../../store'

import { GameDifficulty } from '../../models/game.interfaces'
import { BattleComboId, HazardCardId } from '../../models/card.interfaces'


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
  selectedForDestructionIds$ = this.store.pipe(select(fromStore.getSelectedForDestructionIds))

  availableActions: string[] = []
  remainingFreeCardsAmount = this.store.pipe(select(fromStore.getRemainingFreeCardsAmount))
  requiredBattlePoints: number

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

    this.subscriptions$.add(this.store.pipe(
      select(fromStore.getActiveBattleRequiredPoints),
    ).subscribe(points => this.requiredBattlePoints = points))
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

  playHazardCard(id: HazardCardId) {
    if (this.availableActions.includes(fromStore.InnerGameActionTypes.PLAY_HAZARD)) {
      this.store.dispatch(new fromStore.PlayHazard(id))
    }
  }

  shuffleRobinsonCardDeck() {
    if (this.availableActions.includes(fromStore.InnerGameActionTypes.SHUFFLE_BATTLE_CARDS)) {
      this.store.dispatch(new fromStore.ShuffleBattleCards())
    }
  }

  loseBattle() {
    if (this.availableActions.includes(fromStore.InnerGameActionTypes.LOSE_BATTLE)) {
      this.store.dispatch(new fromStore.LoseBattle())
    }
  }

  loseBattleConfirm() {
    if (this.availableActions.includes(fromStore.InnerGameActionTypes.LOSE_BATTLE_CONFIRM)) {
      this.store.dispatch(new fromStore.LoseBattleConfirm(this.requiredBattlePoints))
    }
  }

  loseBattleCancel() {
    if (this.availableActions.includes(fromStore.InnerGameActionTypes.LOSE_BATTLE_CANCEL)) {
      this.store.dispatch(new fromStore.LoseBattleCancel())
    }
  }

  deselectForDestruction(id: BattleComboId) {
    if (this.availableActions.includes(fromStore.InnerGameActionTypes.DESELECT_FOR_DESTRUCTION)) {
      this.store.dispatch(new fromStore.DeselectForDestruction(id))
    }
  }

  selectForDestruction(id: BattleComboId) {
    if (this.availableActions.includes(fromStore.InnerGameActionTypes.SELECT_FOR_DESTRUCTION)) {
      this.store.dispatch(new fromStore.SelectForDestruction(id))
    }
  }

  winBattle(id: BattleComboId) {
    if (this.availableActions.includes(fromStore.InnerGameActionTypes.WIN_BATTLE)) {
      this.store.dispatch(new fromStore.WinBattle(id))
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
