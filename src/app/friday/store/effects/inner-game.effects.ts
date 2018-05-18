import { Injectable } from '@angular/core'

import { Actions, Effect, ofType } from '@ngrx/effects'
import { select, Store } from '@ngrx/store'
import { map, withLatestFrom } from 'rxjs/operators'

import * as fromStore from '../../store'
import * as fromInnerGameActions from '../actions/inner-game.actions'
import * as fromOuterGameActions from '../actions/outer-game.actions'

import { createDeck, shuffle } from '../../helpers/card.helpers'


@Injectable()
export class InnerGameEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromStore.State>,
  ) {}

  // Init
  @Effect()
  initGame$ = this.actions$.pipe(
    ofType(fromInnerGameActions.InnerGameActionTypes.INIT_GAME),
    map((action: fromInnerGameActions.InitGame) => action.payload),
    withLatestFrom(this.store.pipe(select(fromStore.getCardsState))),
    map(([ difficulty, cardsState ]) => {
      return new fromInnerGameActions.InitGameSuccess(createDeck(difficulty, cardsState))
    }),
  )

  @Effect()
  initGameSuccess$ = this.actions$.pipe(
    ofType(fromInnerGameActions.InnerGameActionTypes.INIT_GAME_SUCCESS),
    map((action: fromInnerGameActions.InitGame) => action.payload),
    map(() => {
      return new fromOuterGameActions.Save()
    }),
  )

  @Effect()
  shuffleBattleCards$ = this.actions$.pipe(
    ofType(fromInnerGameActions.InnerGameActionTypes.SHUFFLE_BATTLE_CARDS),
    withLatestFrom(this.store.pipe(select(fromStore.getRobinsonDiscardPile)), (action, ids) => ids),
    map(ids => {
      return new fromInnerGameActions.ShuffleBattleCardsSuccess(shuffle(ids))
    }),
  )
}
