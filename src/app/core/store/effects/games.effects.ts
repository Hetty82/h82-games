import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { Effect, Actions, ofType } from '@ngrx/effects'
import { of } from 'rxjs/observable/of'
import { map, switchMap, catchError, tap } from 'rxjs/operators'

import * as fromGamesActions from '../actions/games.actions'
import * as fromServices from '../../services'


@Injectable()
export class GamesEffects {
  constructor(
    private actions$: Actions,
    private gamesService: fromServices.GamesService,
    private router: Router,
  ) {}

  @Effect()
  loadGames$ = this.actions$.pipe(
    ofType(fromGamesActions.GamesActionTypes.LOAD_GAMES),
    switchMap(() => {
      return this.gamesService
        .getGames()
        .pipe(
          map(games => new fromGamesActions.LoadGamesSuccess(games)),
          catchError(error => of(new fromGamesActions.LoadGamesFail(error))),
        )
    }),
  )

  @Effect({ dispatch: false })
  selectGame$ = this.actions$.pipe(
    ofType(fromGamesActions.GamesActionTypes.SELECT_GAME),
    map((action: fromGamesActions.SelectGame) => action.payload),
    tap(gameName => {
      const url = '/' + gameName.toLocaleLowerCase()
      this.router.navigate([ url ])
    }),
  )
}
