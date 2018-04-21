import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { Effect, Actions, ofType } from '@ngrx/effects'
import { of } from 'rxjs/observable/of'
import { map, switchMap, catchError, tap } from 'rxjs/operators'

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
  loadGames$ = this.actions$.pipe(
    ofType(gamesActions.LOAD_GAMES),
    switchMap(() => {
      return this.gamesService
        .getGames()
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
    tap(gameName => {
      const url = '/' + gameName.toLocaleLowerCase()
      this.router.navigate([ url ])
    }),
  )
}
