import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { Effect, Actions, ofType } from '@ngrx/effects'
import { of } from 'rxjs/observable/of'
import { map, switchMap, catchError, tap } from 'rxjs/operators'

import * as fromServices from '../../services'
import * as fromUserActions from '../actions/user.actions'


@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: fromServices.UserService,
    private router: Router,
  ) {}

  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(fromUserActions.UserActionTypes.LOAD_USERS),
    switchMap(() => {
      return this.userService
        .getUsers()
        .pipe(
          map(user => new fromUserActions.LoadUsersSuccess(user)),
          catchError(error => of(new fromUserActions.LoadUsersFail(error))),
        )
    }),
  )

  @Effect({ dispatch: false })
  selectUser$ = this.actions$.pipe(
    ofType(fromUserActions.UserActionTypes.SELECT_USER),
    tap(() => this.router.navigate(['/games'])),
  )

  @Effect({ dispatch: false })
  deselectUser$ = this.actions$.pipe(
    ofType(fromUserActions.UserActionTypes.DESELECT_USER),
    tap(() => this.router.navigate(['/login'])),
  )
}
