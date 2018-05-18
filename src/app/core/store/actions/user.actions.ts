import { Action } from '@ngrx/store'

import { User } from '../../models/user.interface'


export type UserError = any
export type UserId = number

export enum UserActionTypes {
  LOAD_USERS = '[Users] Load users',
  LOAD_USERS_FAIL = '[Users] Load users fail',
  LOAD_USERS_SUCCESS = '[Users] Load users success',
  SELECT_USER = '[Users] Select user',
  DESELECT_USER = '[Users] Deselect user',
}


// Actions
export class LoadUsers implements Action {
  readonly type = UserActionTypes.LOAD_USERS
}
export class LoadUsersFail implements Action {
  readonly type = UserActionTypes.LOAD_USERS_FAIL
  constructor(public payload: UserError) {}
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LOAD_USERS_SUCCESS
  constructor(public payload: User[]) {}
}
export class SelectUser implements Action {
  readonly type = UserActionTypes.SELECT_USER
  constructor(public payload: UserId) {}
}
export class DeselectUser implements Action {
  readonly type = UserActionTypes.DESELECT_USER
}


// Action types
export type UserActionsUnion =
  | LoadUsers
  | LoadUsersFail
  | LoadUsersSuccess

  | SelectUser
  | DeselectUser
