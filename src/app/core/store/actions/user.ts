import { Action } from '@ngrx/store'

import { User } from '../../interfaces/user.interface'


export type UserError = any

// Load users
export const LOAD_USERS = '[Users] Load Users'
export const LOAD_USERS_FAIL = '[Users] Load Users Fail'
export const LOAD_USERS_SUCCESS = '[Users] Load Users Success'

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

// Action types
export type UserAction =
  | LoadUsers
  | LoadUsersFail
  | LoadUsersSuccess
