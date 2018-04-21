import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { Effect, Actions, ofType } from '@ngrx/effects'
import { of } from 'rxjs/observable/of'
import { map, switchMap, catchError, tap, mergeMap } from 'rxjs/operators'

import * as gamesActions from '../actions/games.actions'
import * as fromServices from '../../services'


@Injectable()
export class GamesEffects {
  constructor(
    private actions$: Actions,
    private gamesService: fromServices.GamesService,
    private router: Router,
  ) {}

  @Effect()
  createGame$ = this.actions$.pipe(
    ofType(gamesActions.CREATE_GAME),
    map((action: gamesActions.CreateGame) => action.payload),
    mergeMap((game) => {
      return this.gamesService
        .createGame(game)
        .pipe(
          map(createdGame => new gamesActions.CreateGameSuccess(createdGame)),
          catchError(error => of(new gamesActions.CreateGameFail(error))),
        )
    }),
  )

  @Effect()
  deleteGame$ = this.actions$.pipe(
    ofType(gamesActions.DELETE_GAME),
    map((action: gamesActions.DeleteGame) => action.payload),
    mergeMap((gameId) => {
      return this.gamesService
        .deleteGame(gameId)
        .pipe(
          map(createdGame => new gamesActions.DeleteGameSuccess(gameId)),
          catchError(error => of(new gamesActions.DeleteGameFail(error))),
        )
    }),
  )

  @Effect()
  loadGames$ = this.actions$.pipe(
    ofType(gamesActions.LOAD_GAMES),
    map((action: gamesActions.LoadGames) => action.payload),
    switchMap((userId) => {
      return this.gamesService
        .getGamesByUser(userId)
        .pipe(
          map(games => new gamesActions.LoadGamesSuccess(games)),
          catchError(error => of(new gamesActions.LoadGamesFail(error))),
        )
    }),
  )

  @Effect({ dispatch: false })
  selectGame$ = this.actions$.pipe(
    ofType(gamesActions.SELECT_GAME),
    map((action: gamesActions.SelectGame) => action.payload),
    tap(gameId => {
      const url = '/friday/' + gameId
      this.router.navigate([ url ])
    }),
  )
}
