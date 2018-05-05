import { Injectable } from '@angular/core'

import { Actions, Effect, ofType } from '@ngrx/effects'
import { select, Store } from '@ngrx/store'
import { map, withLatestFrom } from 'rxjs/operators'

import * as fromStore from '../../store'
import * as innerGameActions from '../actions/inner-game.actions'
import * as outerGameActions from '../actions/outer-game.actions'

import { createDeck } from '../../helpers/card.helpers'


@Injectable()
export class InnerGameEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromStore.State>,
  ) {}

  // Init
  @Effect()
  initGame$ = this.actions$.pipe(
    ofType(innerGameActions.INIT_GAME),
    map((action: innerGameActions.InitGame) => action.payload),
    withLatestFrom(this.store.pipe(select(fromStore.getCardsState))),
    map(([ difficulty, cardsState ]) => {
      return new innerGameActions.InitGameSuccess(createDeck(difficulty, cardsState))
    }),
  )

  @Effect()
  initGameSuccess$ = this.actions$.pipe(
    ofType(innerGameActions.INIT_GAME_SUCCESS),
    map((action: innerGameActions.InitGame) => action.payload),
    map(() => {
      return new outerGameActions.Save()
    }),
  )
}
