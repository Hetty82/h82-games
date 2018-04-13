import { Injectable } from '@angular/core'

import { Effect, Actions } from '@ngrx/effects'
import { of } from 'rxjs/observable/of'
import { map, switchMap, catchError } from 'rxjs/operators'

import * as userActions from '../actions/user'
import * as fromServices from '../../services'


@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: fromServices.UserService
  ) {}

  @Effect()
  loadUsers$ = this.actions$.ofType(userActions.LOAD_USERS).pipe(
    switchMap(() => {
      return this.userService
        .getUsers()
        .pipe(
          map(user => new userActions.LoadUsersSuccess(user)),
          catchError(error => of(new userActions.LoadUsersFail(error)))
        )
    })
  )
}
