import { Injectable } from '@angular/core'

import { Actions, Effect, ofType } from '@ngrx/effects'

import { map, mergeMap, catchError } from 'rxjs/operators'
import { of } from 'rxjs/observable/of'

import * as activeGameActions from '../actions/active-game.actions'
import * as fromServices from '../../services'

import { Deck } from '../../models/deck.model'


@Injectable()
export class ActiveGameEffects {
  constructor(
    private actions$: Actions,
    private cardService: fromServices.CardService,
    private gamesService: fromServices.GamesService,
  ) {}

  // Init
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

  @Effect()
  createDeckSuccess$ = this.actions$.pipe(
    ofType(activeGameActions.CREATE_DECK_SUCCESS),
    map((action: activeGameActions.CreateDeckSuccess) => action.payload),
    map(payload => new activeGameActions.Play()),
  )

  // Save
  @Effect()
  save$ = this.actions$.pipe(
    ofType(activeGameActions.SAVE),
    map((action: activeGameActions.Save) => action.payload),
    mergeMap(gameDetails => {
      return this.gamesService
        .saveGameDetails(gameDetails)
        .pipe(
          map(() => new activeGameActions.SaveSuccess(gameDetails)),
          catchError(error => of(new activeGameActions.SaveFail(error))),
        )
    }),
  )
}
