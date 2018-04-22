import { Action } from '@ngrx/store'

import { User } from '../../models/user.interface'


export type UserError = any
export type UserId = number

// Load users
export const LOAD_USERS = '[Users] Load users'
export const LOAD_USERS_FAIL = '[Users] Load users fail'
export const LOAD_USERS_SUCCESS = '[Users] Load users success'
// Select user
export const SELECT_USER = '[Users] Select user'
export const DESELECT_USER = '[Users] Deselect user'


// Actions
export class LoadUsers implements Action {
  readonly type = LOAD_USERS
}

export class LoadUsersFail implements Action {
  readonly type = LOAD_USERS_FAIL
  constructor(public payload: UserError) {}
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS
  constructor(public payload: User[]) {}
}

export class SelectUser implements Action {
  readonly type = SELECT_USER
  constructor(public payload: UserId) {}
}

export class DeselectUser implements Action {
  readonly type = DESELECT_USER
}


// Action types
export type UserAction =
  | LoadUsers
  | LoadUsersFail
  | LoadUsersSuccess
  | SelectUser
  | DeselectUser
