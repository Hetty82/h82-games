
import { Action } from '@ngrx/store'

import { Deck, RemoteCardSet } from '../../models/deck.model'
import { GameDifficulty } from '../../models/friday-game.model'
import { FridayGameDetails } from '../../models/friday-game-details.model'
import { GameError } from '../../../core/store/actions/games.actions'

export interface LoadCardsPayload {
  difficulty: GameDifficulty
  set: RemoteCardSet
}

// Init game
export const INIT_GAME = '[Friday - Active Game] Init game'
export const LOAD_CARDS_SUCCESS = '[Friday - Active Game] Load cards success'
export const CREATE_DECK_SUCCESS = '[Friday - Active Game] Create deck success'
// Save game
export const PLAY = '[Friday - Active Game] Play'
// Reset
export const RESET_ACTIVE_GAME_STATE = '[Friday - Active Game] Reset active game state'
// Save game
export const SAVE = '[Friday - Active Game] Save'
export const SAVE_FAIL = '[Friday - Active Game] Save fail'
export const SAVE_SUCCESS = '[Friday - Active Game] Save success'
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

export class Play implements Action {
  readonly type =  PLAY
}

export class ResetActiveGameState implements Action {
  readonly type = RESET_ACTIVE_GAME_STATE
}

export class Save implements Action {
  readonly type = SAVE
  constructor(public payload: FridayGameDetails) {}
}
export class SaveFail implements Action {
  readonly type = SAVE_FAIL
  constructor(public payload: GameError) {}
}
export class SaveSuccess implements Action {
  readonly type = SAVE_SUCCESS
  constructor(public payload: FridayGameDetails) {}
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
  | Play
  | ResetActiveGameState
  | Save
  | SaveFail
  | SaveSuccess
  | SetActiveGame
