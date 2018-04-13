import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { Effect, Actions } from '@ngrx/effects'
import { of } from 'rxjs/observable/of'
import { map, switchMap, catchError, tap } from 'rxjs/operators'

import * as userActions from '../actions/user'
import * as fromServices from '../../services'


@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: fromServices.UserService,
    private router: Router,
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

  @Effect({ dispatch: false })
  selectUser$ = this.actions$.ofType(userActions.SELECT_USER).pipe(
    tap(() => this.router.navigate(['/games']))
  )

  @Effect({ dispatch: false })
  deselectUser$ = this.actions$.ofType(userActions.DESELECT_USER).pipe(
    tap(() => this.router.navigate(['/login']))
  )
}
