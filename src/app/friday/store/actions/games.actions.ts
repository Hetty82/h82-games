import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store'

import { FridayGame } from '../../models/friday-game.model'


export type GameError = HttpErrorResponse
export type GameId = number
export type UserId = number

// Create game
export const CREATE_GAME = '[Friday - Games] Create Game'
export const CREATE_GAME_FAIL = '[Friday - Games] Create Games Fail'
export const CREATE_GAME_SUCCESS = '[Friday - Games] Create Games Success'
// Load games
export const LOAD_GAMES = '[Friday - Games] Load Games'
export const LOAD_GAMES_FAIL = '[Friday - Games] Load Games Fail'
export const LOAD_GAMES_SUCCESS = '[Friday - Games] Load Games Success'
// Select game
export const SELECT_GAME = '[Friday - Games] Select Game'


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

export class SelectGame implements Action {
  readonly type = SELECT_GAME
  constructor(public payload: GameId) {}
}


// Action types
export type GamesAction =
  | CreateGame
  | CreateGameFail
  | CreateGameSuccess
  | LoadGames
  | LoadGamesFail
  | LoadGamesSuccess
  | SelectGame
