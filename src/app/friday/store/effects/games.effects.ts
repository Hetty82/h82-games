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
    tap(game => console.log('to service:', game)),
    mergeMap((game) => {
      return this.gamesService
        .createGame(game)
        .pipe(
          map(createdGame => {
            console.log('fromServer:', createdGame)
            return new gamesActions.CreateGameSuccess(createdGame)
          }),
          catchError(error => of(new gamesActions.CreateGameFail(error))),
        )
    })
  )

  loadGames$ = this.actions$.pipe(
    ofType(gamesActions.LOAD_GAMES),
    map((action: gamesActions.LoadGames) => action.payload),
    switchMap((userId) => {
      return this.gamesService
        .getGames(userId)
        .pipe(
          map(games => new gamesActions.LoadGamesSuccess(games)),
          catchError(error => of(new gamesActions.LoadGamesFail(error))),
        )
    })
  )

  @Effect({ dispatch: false })
  selectGame$ = this.actions$.pipe(
    ofType(gamesActions.SELECT_GAME),
    map((action: gamesActions.SelectGame) => action.payload),
    tap(gameId => {
      const url = '/friday/' + gameId
      this.router.navigate([ url ])
    })
  )
}
