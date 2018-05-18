import { Action } from '@ngrx/store'

import { Game } from '../../models/game.interface'


export type GameError = any
export type GameName = string

export enum GamesActionTypes {
  LOAD_GAMES = '[Games] Load games',
  LOAD_GAMES_FAIL = '[Games] Load games fail',
  LOAD_GAMES_SUCCESS = '[Games] Load games success',
  SELECT_GAME = '[Games] Select game',
}


// Actions
export class LoadGames implements Action {
  readonly type = GamesActionTypes.LOAD_GAMES
}

export class LoadGamesFail implements Action {
  readonly type = GamesActionTypes.LOAD_GAMES_FAIL
  constructor(public payload: GameError) {}
}

export class LoadGamesSuccess implements Action {
  readonly type = GamesActionTypes.LOAD_GAMES_SUCCESS
  constructor(public payload: Game[]) {}
}

export class SelectGame implements Action {
  readonly type = GamesActionTypes.SELECT_GAME
  constructor(public payload: GameName) {}
}


// Action types
export type GamesActionsUnion =
  | LoadGames
  | LoadGamesFail
  | LoadGamesSuccess
  | SelectGame
