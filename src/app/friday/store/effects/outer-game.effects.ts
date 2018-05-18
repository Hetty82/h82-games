import { Injectable } from '@angular/core'

import { Actions, Effect, ofType } from '@ngrx/effects'
import { Store, select } from '@ngrx/store'

import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators'
import { of } from 'rxjs/observable/of'

import * as fromStore from '../../store'
import * as fromServices from '../../services'
import * as fromOuterGameActions from '../actions/outer-game.actions'


@Injectable()
export class OuterGameEffects {
  constructor(
    private actions$: Actions,
    private cardService: fromServices.CardService,
    private gamesService: fromServices.GamesService,
    private store: Store<fromStore.State>,
  ) {}

  // Load
  @Effect()
  loadCards$ = this.actions$.pipe(
    ofType(fromOuterGameActions.OuterGameActionTypes.LOAD_CARDS),
    mergeMap(() => {
      return this.cardService
      .getCards()
      .pipe(
        map(set => new fromOuterGameActions.LoadCardsSuccess(set)),
      )
    }),
  )

  // Save
  @Effect()
  save$ = this.actions$.pipe(
    ofType(fromOuterGameActions.OuterGameActionTypes.SAVE),
    withLatestFrom(this.store.pipe(select(fromStore.getActiveGameState)), (action, state) => state),
    mergeMap(activeGameState => {
      const { playing, shuffling, ...gameDetails } = activeGameState

      return this.gamesService
        .saveGameDetails(gameDetails)
        .pipe(
          map(() => new fromOuterGameActions.SaveSuccess()),
          catchError(error => of(new fromOuterGameActions.SaveFail(error))),
        )
    }),
  )
}
