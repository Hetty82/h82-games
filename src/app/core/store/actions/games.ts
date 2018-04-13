import { Action } from '@ngrx/store'

import { Game } from '../../interfaces/game.interface'


export type GameError = any

// Load games
export const LOAD_GAMES = '[Games] Load Games'
export const LOAD_GAMES_FAIL = '[Games] Load Games Fail'
export const LOAD_GAMES_SUCCESS = '[Games] Load Games Success'

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

// Action types
export type GamesAction =
  | LoadGames
  | LoadGamesFail
  | LoadGamesSuccess
