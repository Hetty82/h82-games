
import { Action } from '@ngrx/store'

import { FridayGameDetails } from '../../models/friday-game-details.model'


// Init game
export const INIT_GAME = '[Friday - Active Game] Init game'
// Remove active game
export const REMOVE_ACTIVE_GAME = '[Friday - Active Game] Remove active game'
// Reset
export const RESET_ACTIVE_GAME_STATE = '[Friday - Active Game] Reset active game state'
// Set active game
export const SET_ACTIVE_GAME = '[Friday - Active Game] Set active game'


// Actions
export class InitGame implements Action {
  readonly type = INIT_GAME
}

export class RemoveActiveGame implements Action {
  readonly type = REMOVE_ACTIVE_GAME
}

export class ResetActiveGameState implements Action {
  readonly type = RESET_ACTIVE_GAME_STATE
}

export class SetActiveGame implements Action {
  readonly type = SET_ACTIVE_GAME
  constructor(public payload: FridayGameDetails) {}
}


// Action types
export type ActiveGameAction =
  | InitGame
  | RemoveActiveGame
  | ResetActiveGameState
  | SetActiveGame
