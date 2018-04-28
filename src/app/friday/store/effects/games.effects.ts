import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { Effect, Actions, ofType } from '@ngrx/effects'
import { Store, select } from '@ngrx/store'

import { of } from 'rxjs/observable/of'
import { map, switchMap, catchError, tap, mergeMap, withLatestFrom, filter } from 'rxjs/operators'

import * as fromStore from '../../store'

import * as gamesActions from '../actions/games.actions'
import * as activeGameActions from '../actions/active-game.actions'
import * as fromServices from '../../services'


@Injectable()
export class GamesEffects {
  constructor(
    private actions$: Actions,
    private gamesService: fromServices.GamesService,
    private router: Router,
    private store: Store<fromStore.State>,
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
  createGameSuccess$ = this.actions$.pipe(
    ofType(gamesActions.CREATE_GAME_SUCCESS),
    map((action: gamesActions.CreateGameSuccess) => action.payload),
    mergeMap((game) => {
      return this.gamesService
        .createGameDetails(game)
        .pipe(
          map(gameDetails => new gamesActions.CreateGameDetailsSuccess(gameDetails)),
          catchError(error => of(new gamesActions.CreateGameDetailsFail(error))),
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
          map(() => new gamesActions.DeleteGameSuccess(gameId)),
          catchError(error => of(new gamesActions.DeleteGameFail(error))),
        )
    }),
  )

  @Effect()
  deleteGameSuccess1$ = this.actions$.pipe(
    ofType(gamesActions.DELETE_GAME_SUCCESS),
    map((action: gamesActions.DeleteGameSuccess) => action.payload),
    mergeMap((gameId) => {
      return this.gamesService
        .deleteGameDetails(gameId)
        .pipe(
          map(() => new gamesActions.DeleteGameDetailsSuccess(gameId)),
          catchError(error => of(new gamesActions.DeleteGameDetailsFail(error))),
        )
    }),
  )

  @Effect()
  deleteGameSuccess2$ = this.actions$.pipe(
    ofType(gamesActions.DELETE_GAME_SUCCESS),
    map((action: gamesActions.DeleteGameSuccess) => action.payload),
    withLatestFrom(this.store.pipe(select(fromStore.getActiveGameId))),
    filter(([gameId, activeGameId]) => gameId === activeGameId),
    map(() => new activeGameActions.RemoveActiveGame()),
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

  @Effect()
  loadGameDetails$ = this.actions$.pipe(
    ofType(gamesActions.LOAD_GAME_DETAILS),
    map((action: gamesActions.LoadGameDetails) => action.payload),
    switchMap((gameId) => {
      return this.gamesService
        .getGameDetails(gameId)
        .pipe(
          map(gameDetails => new gamesActions.LoadGameDetailsSuccess(gameDetails)),
          catchError(error => of(new gamesActions.LoadGameDetailsFail(error))),
        )
    }),
  )

  @Effect()
  loadGameDetailsSuccess$ = this.actions$.pipe(
    ofType(gamesActions.LOAD_GAME_DETAILS_SUCCESS),
    map((action: gamesActions.LoadGameDetailsSuccess) => action.payload),
    map((gameDetails) => new activeGameActions.SetActiveGame(gameDetails)),
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
