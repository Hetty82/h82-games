import { Injectable } from '@angular/core'

import { Effect, Actions } from '@ngrx/effects'
import { of } from 'rxjs/observable/of'
import { map, switchMap, catchError } from 'rxjs/operators'

import * as gamesActions from '../actions/games'
import * as fromServices from '../../services'


@Injectable()
export class GamesEffects {
  constructor(
    private actions$: Actions,
    private gamesService: fromServices.GamesService
  ) {}

  @Effect()
  loadGames$ = this.actions$.ofType(gamesActions.LOAD_GAMES).pipe(
    switchMap(() => {
      return this.gamesService
        .getGames()
        .pipe(
          map(games => new gamesActions.LoadGamesSuccess(games)),
          catchError(error => of(new gamesActions.LoadGamesFail(error)))
        )
    })
  )
}
