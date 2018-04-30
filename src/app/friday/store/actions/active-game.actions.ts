
import { Action } from '@ngrx/store'

import { FridayGameDetails } from '../../models/friday-game-details.model'
import { Deck, RemoteCardSet } from '../../models/deck.model'
import { GameDifficulty } from '../../models/friday-game.model'

export interface LoadCardsPayload {
  difficulty: GameDifficulty
  set: RemoteCardSet
}

// Init game
export const INIT_GAME = '[Friday - Active Game] Init game'
export const LOAD_CARDS_SUCCESS = '[Friday - Active Game] Load cards success'
export const CREATE_DECK_SUCCESS = '[Friday - Active Game] Create deck success'
// Reset
export const RESET_ACTIVE_GAME_STATE = '[Friday - Active Game] Reset active game state'
// Set active game
export const SET_ACTIVE_GAME = '[Friday - Active Game] Set active game'


// Actions
export class InitGame implements Action {
  readonly type = INIT_GAME
  constructor(public payload: GameDifficulty) {}
}
export class LoadCardsSuccess implements Action {
  readonly type = LOAD_CARDS_SUCCESS
  constructor(public payload: LoadCardsPayload) {}
}
export class CreateDeckSuccess implements Action {
  readonly type = CREATE_DECK_SUCCESS
  constructor(public payload: Deck) {}
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
  | LoadCardsSuccess
  | CreateDeckSuccess
  | ResetActiveGameState
  | SetActiveGame
