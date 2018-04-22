import { Action } from '@ngrx/store'

import { Game } from '../../models/game.interface'


export type GameError = any
export type GameName = string

// Load games
export const LOAD_GAMES = '[Games] Load games'
export const LOAD_GAMES_FAIL = '[Games] Load games fail'
export const LOAD_GAMES_SUCCESS = '[Games] Load games success'
// Select game
export const SELECT_GAME = '[Games] Select game'


// Actions
export class LoadGames implements Action {
  readonly type = LOAD_GAMES
}

export class LoadGamesFail implements Action {
  readonly type = LOAD_GAMES_FAIL
  constructor(public payload: GameError) {}
}

export class LoadGamesSuccess implements Action {
  readonly type = LOAD_GAMES_SUCCESS
  constructor(public payload: Game[]) {}
}

export class SelectGame implements Action {
  readonly type = SELECT_GAME
  constructor(public payload: GameName) {}
}


// Action types
export type GamesAction =
  | LoadGames
  | LoadGamesFail
  | LoadGamesSuccess
  | SelectGame
