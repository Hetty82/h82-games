import { Injectable } from '@angular/core'

import { Actions, Effect, ofType } from '@ngrx/effects'

import { map, mergeMap } from 'rxjs/operators'

import * as activeGameActions from '../actions/active-game.actions'
import * as fromServices from '../../services'

import { Deck } from '../../models/deck.model'


@Injectable()
export class ActiveGameEffects {
  constructor(
    private actions$: Actions,
    private cardService: fromServices.CardService,
  ) {}

  @Effect()
  initGame$ = this.actions$.pipe(
    ofType(activeGameActions.INIT_GAME),
    map((action: activeGameActions.InitGame) => action.payload),
    mergeMap(difficulty => {
      return this.cardService
        .getCards()
        .pipe(
          map(set => new activeGameActions.LoadCardsSuccess({ set, difficulty })),
        )
    }),
  )

  @Effect()
  loadCardsSuccess$ = this.actions$.pipe(
    ofType(activeGameActions.LOAD_CARDS_SUCCESS),
    map((action: activeGameActions.LoadCardsSuccess) => action.payload),
    map(payload => new activeGameActions.CreateDeckSuccess(new Deck(payload.difficulty, payload.set))),
  )
}
