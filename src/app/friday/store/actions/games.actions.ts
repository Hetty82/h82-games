import { Action } from '@ngrx/store'

import { Game } from '../../models/game.model'
import { GameDetails } from '../../models/game-details.model'
import { GameError, GameId } from '../../models/game.interfaces'


export type UserId = number

export enum GamesActionTypes {
  // Create game
  CREATE_GAME = '[Friday - Games] Create game',
  CREATE_GAME_FAIL = '[Friday - Games] Create game fail',
  CREATE_GAME_SUCCESS = '[Friday - Games] Create game success',
  // Create game details
  CREATE_GAME_DETAILS = '[Friday - Games] Create game details',
  CREATE_GAME_DETAILS_FAIL = '[Friday - Games] Create game details fail',
  CREATE_GAME_DETAILS_SUCCESS = '[Friday - Games] Create game details success',
  // Delete game
  DELETE_GAME = '[Friday - Games] Delete game',
  DELETE_GAME_FAIL = '[Friday - Games] Delete game fail',
  DELETE_GAME_SUCCESS = '[Friday - Games] Delete game success',
  // Delete game details
  DELETE_GAME_DETAILS = '[Friday - Games] Delete game details',
  DELETE_GAME_DETAILS_FAIL = '[Friday - Games] Delete game details fail',
  DELETE_GAME_DETAILS_SUCCESS = '[Friday - Games] Delete game details success',
  // Load games
  LOAD_GAMES = '[Friday - Games] Load games',
  LOAD_GAMES_FAIL = '[Friday - Games] Load games fail',
  LOAD_GAMES_SUCCESS = '[Friday - Games] Load games success',
  // Load game details
  LOAD_GAME_DETAILS = '[Friday - Games] Load game details',
  LOAD_GAME_DETAILS_FAIL = '[Friday - Games] Load game details fail',
  LOAD_GAME_DETAILS_SUCCESS = '[Friday - Games] Load game details success',
  // Reset
  RESET_GAMES_STATE = '[Friday - Games] Reset games state',
}


// Actions
export class CreateGame implements Action {
  readonly type = GamesActionTypes.CREATE_GAME
  constructor(public payload: Game) {}
}
export class CreateGameFail implements Action {
  readonly type = GamesActionTypes.CREATE_GAME_FAIL
  constructor(public payload: GameError) {}
}
export class CreateGameSuccess implements Action {
  readonly type = GamesActionTypes.CREATE_GAME_SUCCESS
  constructor(public payload: Game) {}
}

export class CreateGameDetails implements Action {
  readonly type = GamesActionTypes.CREATE_GAME_DETAILS
  constructor(public payload: GameId) {}
}
export class CreateGameDetailsFail implements Action {
  readonly type = GamesActionTypes.CREATE_GAME_DETAILS_FAIL
  constructor(public payload: GameError) {}
}
export class CreateGameDetailsSuccess implements Action {
  readonly type = GamesActionTypes.CREATE_GAME_DETAILS_SUCCESS
  constructor(public payload: GameDetails) {}
}

export class DeleteGame implements Action {
  readonly type = GamesActionTypes.DELETE_GAME
  constructor(public payload: GameId) {}
}
export class DeleteGameFail implements Action {
  readonly type = GamesActionTypes.DELETE_GAME_FAIL
  constructor(public payload: GameError) {}
}
export class DeleteGameSuccess implements Action {
  readonly type = GamesActionTypes.DELETE_GAME_SUCCESS
  constructor(public payload: GameId) {}
}

export class DeleteGameDetails implements Action {
  readonly type = GamesActionTypes.DELETE_GAME_DETAILS
  constructor(public payload: GameId) {}
}
export class DeleteGameDetailsFail implements Action {
  readonly type = GamesActionTypes.DELETE_GAME_DETAILS_FAIL
  constructor(public payload: GameError) {}
}
export class DeleteGameDetailsSuccess implements Action {
  readonly type = GamesActionTypes.DELETE_GAME_DETAILS_SUCCESS
  constructor(public payload: GameId) {}
}

export class LoadGames implements Action {
  readonly type = GamesActionTypes.LOAD_GAMES
  constructor(public payload: UserId) {}
}
export class LoadGamesFail implements Action {
  readonly type = GamesActionTypes.LOAD_GAMES_FAIL
  constructor(public payload: GameError) {}
}
export class LoadGamesSuccess implements Action {
  readonly type = GamesActionTypes.LOAD_GAMES_SUCCESS
  constructor(public payload: Game[]) {}
}

export class LoadGameDetails implements Action {
  readonly type = GamesActionTypes.LOAD_GAME_DETAILS
  constructor(public payload: GameId) {}
}
export class LoadGameDetailsFail implements Action {
  readonly type = GamesActionTypes.LOAD_GAME_DETAILS_FAIL
  constructor(public payload: GameError) {}
}
export class LoadGameDetailsSuccess implements Action {
  readonly type = GamesActionTypes.LOAD_GAME_DETAILS_SUCCESS
  constructor(public payload: GameDetails) {}
}

export class ResetGamesState implements Action {
  readonly type = GamesActionTypes.RESET_GAMES_STATE
}


// Action types
export type GamesActionsUnion =
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
