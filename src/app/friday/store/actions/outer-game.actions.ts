
import { Action } from '@ngrx/store'

import { CardsRemote } from '../../models/card.interfaces'
import { GameDetails } from '../../models/game-details.model'
import { GameError } from '../../../core/store/actions/games.actions'


// Load cards
export const LOAD_CARDS = '[Friday - Active Game] Load cards'
export const LOAD_CARDS_SUCCESS = '[Friday - Active Game] Load cards success'

// Play game
export const PLAY = '[Friday - Active Game] Play'

// Save game
export const SAVE = '[Friday - Active Game] Save'
export const SAVE_FAIL = '[Friday - Active Game] Save fail'
export const SAVE_SUCCESS = '[Friday - Active Game] Save success'

// Set active game
export const SET_ACTIVE_GAME = '[Friday - Active Game] Set active game'

// Reset
export const RESET_ACTIVE_GAME = '[Friday - Active Game] Reset active game state'
export const RESET_CARDS_STATE = '[Friday - Active Game] Reset cards state'


// Actions
export class LoadCards implements Action {
  readonly type = LOAD_CARDS
}
export class LoadCardsSuccess implements Action {
  readonly type = LOAD_CARDS_SUCCESS
  constructor(public payload: CardsRemote) {}
}

export class Play implements Action {
  readonly type = PLAY
}

export class Save implements Action {
  readonly type = SAVE
}
export class SaveFail implements Action {
  readonly type = SAVE_FAIL
  constructor(public payload: GameError) {}
}
export class SaveSuccess implements Action {
  readonly type = SAVE_SUCCESS
}

export class SetActiveGame implements Action {
  readonly type = SET_ACTIVE_GAME
  constructor(public payload: GameDetails) {}
}

export class ResetActiveGame implements Action {
  readonly type = RESET_ACTIVE_GAME
}
export class ResetCardsState implements Action {
  readonly type = RESET_CARDS_STATE
}

// Action types
export type OuterGameAction =
  | LoadCards
  | LoadCardsSuccess
  | Play
  | Save
  | SaveFail
  | SaveSuccess
  | SetActiveGame

  | ResetActiveGame
  | ResetCardsState
