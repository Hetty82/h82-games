import { Action } from '@ngrx/store'

import { FridayGame, GameError, GameId } from '../../models/friday-game.model'
import { FridayGameDetails } from '../../models/friday-game-details.model'


export type UserId = number

// Create game
export const CREATE_GAME = '[Friday - Games] Create game'
export const CREATE_GAME_FAIL = '[Friday - Games] Create game fail'
export const CREATE_GAME_SUCCESS = '[Friday - Games] Create game success'
// Create game details
export const CREATE_GAME_DETAILS = '[Friday - Games] Create game details'
export const CREATE_GAME_DETAILS_FAIL = '[Friday - Games] Create game details fail'
export const CREATE_GAME_DETAILS_SUCCESS = '[Friday - Games] Create game details success'
// Delete game
export const DELETE_GAME = '[Friday - Games] Delete game'
export const DELETE_GAME_FAIL = '[Friday - Games] Delete game fail'
export const DELETE_GAME_SUCCESS = '[Friday - Games] Delete game success'
// Delete game details
export const DELETE_GAME_DETAILS = '[Friday - Games] Delete game details'
export const DELETE_GAME_DETAILS_FAIL = '[Friday - Games] Delete game details fail'
export const DELETE_GAME_DETAILS_SUCCESS = '[Friday - Games] Delete game details success'
// Load games
export const LOAD_GAMES = '[Friday - Games] Load games'
export const LOAD_GAMES_FAIL = '[Friday - Games] Load games fail'
export const LOAD_GAMES_SUCCESS = '[Friday - Games] Load games success'
// Load game details
export const LOAD_GAME_DETAILS = '[Friday - Games] Load game details'
export const LOAD_GAME_DETAILS_FAIL = '[Friday - Games] Load game details fail'
export const LOAD_GAME_DETAILS_SUCCESS = '[Friday - Games] Load game details success'
// Reset
export const RESET_GAMES_STATE = '[Friday - Games] Reset games state'


// Actions
export class CreateGame implements Action {
  readonly type = CREATE_GAME
  constructor(public payload: FridayGame) {}
}
export class CreateGameFail implements Action {
  readonly type = CREATE_GAME_FAIL
  constructor(public payload: GameError) {}
}
export class CreateGameSuccess implements Action {
  readonly type = CREATE_GAME_SUCCESS
  constructor(public payload: FridayGame) {}
}

export class CreateGameDetails implements Action {
  readonly type = CREATE_GAME_DETAILS
  constructor(public payload: GameId) {}
}
export class CreateGameDetailsFail implements Action {
  readonly type = CREATE_GAME_DETAILS_FAIL
  constructor(public payload: GameError) {}
}
export class CreateGameDetailsSuccess implements Action {
  readonly type = CREATE_GAME_DETAILS_SUCCESS
  constructor(public payload: FridayGameDetails) {}
}

export class DeleteGame implements Action {
  readonly type = DELETE_GAME
  constructor(public payload: GameId) {}
}
export class DeleteGameFail implements Action {
  readonly type = DELETE_GAME_FAIL
  constructor(public payload: GameError) {}
}
export class DeleteGameSuccess implements Action {
  readonly type = DELETE_GAME_SUCCESS
  constructor(public payload: GameId) {}
}

export class DeleteGameDetails implements Action {
  readonly type = DELETE_GAME_DETAILS
  constructor(public payload: GameId) {}
}
export class DeleteGameDetailsFail implements Action {
  readonly type = DELETE_GAME_DETAILS_FAIL
  constructor(public payload: GameError) {}
}
export class DeleteGameDetailsSuccess implements Action {
  readonly type = DELETE_GAME_DETAILS_SUCCESS
  constructor(public payload: GameId) {}
}

export class LoadGames implements Action {
  readonly type = LOAD_GAMES
  constructor(public payload: UserId) {}
}
export class LoadGamesFail implements Action {
  readonly type = LOAD_GAMES_FAIL
  constructor(public payload: GameError) {}
}
export class LoadGamesSuccess implements Action {
  readonly type = LOAD_GAMES_SUCCESS
  constructor(public payload: FridayGame[]) {}
}

export class LoadGameDetails implements Action {
  readonly type = LOAD_GAME_DETAILS
  constructor(public payload: GameId) {}
}
export class LoadGameDetailsFail implements Action {
  readonly type = LOAD_GAME_DETAILS_FAIL
  constructor(public payload: GameError) {}
}
export class LoadGameDetailsSuccess implements Action {
  readonly type = LOAD_GAME_DETAILS_SUCCESS
  constructor(public payload: FridayGameDetails) {}
}

export class ResetGamesState implements Action {
  readonly type = RESET_GAMES_STATE
}


// Action types
export type GamesAction =
  | CreateGame
  | CreateGameFail
  | CreateGameSuccess
  | CreateGameDetails
  | CreateGameDetailsFail
  | CreateGameDetailsSuccess
  | DeleteGame
  | DeleteGameFail
  | DeleteGameSuccess
  | DeleteGameDetails
  | DeleteGameDetailsFail
  | DeleteGameDetailsSuccess
  | LoadGames
  | LoadGamesFail
  | LoadGamesSuccess
  | LoadGameDetails
  | LoadGameDetailsFail
  | LoadGameDetailsSuccess
  | ResetGamesState
