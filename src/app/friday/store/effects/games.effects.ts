import { Injectable } from '@angular/core'

import { Effect, Actions, ofType } from '@ngrx/effects'
import { Store, select } from '@ngrx/store'

import { of } from 'rxjs/observable/of'
import { map, switchMap, catchError, mergeMap, withLatestFrom, filter } from 'rxjs/operators'

import * as fromStore from '../../store'

import * as fromGamesActions from '../actions/games.actions'
import * as fromOuterGameActions from '../actions/outer-game.actions'
import * as fromServices from '../../services'


@Injectable()
export class GamesEffects {
  constructor(
    private actions$: Actions,
    private gamesService: fromServices.GamesService,
    private store: Store<fromStore.State>,
  ) {}

  @Effect()
  createGame$ = this.actions$.pipe(
    ofType(fromGamesActions.GamesActionTypes.CREATE_GAME),
    map((action: fromGamesActions.CreateGame) => action.payload),
    mergeMap((game) => {
      return this.gamesService
        .createGame(game)
        .pipe(
          map(createdGame => new fromGamesActions.CreateGameSuccess(createdGame)),
          catchError(error => of(new fromGamesActions.CreateGameFail(error))),
        )
    }),
  )

  @Effect()
  createGameSuccess$ = this.actions$.pipe(
    ofType(fromGamesActions.GamesActionTypes.CREATE_GAME_SUCCESS),
    map((action: fromGamesActions.CreateGameSuccess) => action.payload),
    mergeMap((game) => {
      return this.gamesService
        .createGameDetails(game)
        .pipe(
          map(gameDetails => new fromGamesActions.CreateGameDetailsSuccess(gameDetails)),
          catchError(error => of(new fromGamesActions.CreateGameDetailsFail(error))),
        )
    }),
  )

  @Effect()
  deleteGame$ = this.actions$.pipe(
    ofType(fromGamesActions.GamesActionTypes.DELETE_GAME),
    map((action: fromGamesActions.DeleteGame) => action.payload),
    mergeMap((gameId) => {
      return this.gamesService
        .deleteGame(gameId)
        .pipe(
          map(() => new fromGamesActions.DeleteGameSuccess(gameId)),
          catchError(error => of(new fromGamesActions.DeleteGameFail(error))),
        )
    }),
  )

  @Effect()
  deleteGameSuccess1$ = this.actions$.pipe(
    ofType(fromGamesActions.GamesActionTypes.DELETE_GAME_SUCCESS),
    map((action: fromGamesActions.DeleteGameSuccess) => action.payload),
    mergeMap((gameId) => {
      return this.gamesService
        .deleteGameDetails(gameId)
        .pipe(
          map(() => new fromGamesActions.DeleteGameDetailsSuccess(gameId)),
          catchError(error => of(new fromGamesActions.DeleteGameDetailsFail(error))),
        )
    }),
  )

  @Effect()
  deleteGameSuccess2$ = this.actions$.pipe(
    ofType(fromGamesActions.GamesActionTypes.DELETE_GAME_SUCCESS),
    map((action: fromGamesActions.DeleteGameSuccess) => action.payload),
    withLatestFrom(this.store.pipe(select(fromStore.getActiveGameId))),
    filter(([gameId, loadedGameId]) => gameId === loadedGameId),
    map(() => new fromOuterGameActions.ResetActiveGame()),
  )

  @Effect()
  loadGames$ = this.actions$.pipe(
    ofType(fromGamesActions.GamesActionTypes.LOAD_GAMES),
    map((action: fromGamesActions.LoadGames) => action.payload),
    switchMap((userId) => {
      return this.gamesService
        .getGamesByUser(userId)
        .pipe(
          map(games => new fromGamesActions.LoadGamesSuccess(games)),
          catchError(error => of(new fromGamesActions.LoadGamesFail(error))),
        )
    }),
  )

  @Effect()
  loadGameDetails$ = this.actions$.pipe(
    ofType(fromGamesActions.GamesActionTypes.LOAD_GAME_DETAILS),
    map((action: fromGamesActions.LoadGameDetails) => action.payload),
    switchMap((gameId) => {
      return this.gamesService
        .getGameDetails(gameId)
        .pipe(
          map(gameDetails => new fromGamesActions.LoadGameDetailsSuccess(gameDetails)),
          catchError(error => of(new fromGamesActions.LoadGameDetailsFail(error))),
        )
    }),
  )
}
