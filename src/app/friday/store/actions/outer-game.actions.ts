
import { Action } from '@ngrx/store'

import { CardsRemote } from '../../models/card.interfaces'
import { GameDetails } from '../../models/game-details.model'
import { GameError } from '../../../core/store/actions/games.actions'


export enum OuterGameActionTypes {
  // Load cards
  LOAD_CARDS = '[Friday - Active Game] Load cards',
  LOAD_CARDS_SUCCESS = '[Friday - Active Game] Load cards success',
  // Play game
  PLAY = '[Friday - Active Game] Play',
  // Save game
  SAVE = '[Friday - Active Game] Save',
  SAVE_FAIL = '[Friday - Active Game] Save fail',
  SAVE_SUCCESS = '[Friday - Active Game] Save success',
  // Set active game
  SET_ACTIVE_GAME = '[Friday - Active Game] Set active game',
  // Reset
  RESET_ACTIVE_GAME = '[Friday - Active Game] Reset active game state',
  RESET_CARDS_STATE = '[Friday - Active Game] Reset cards state',
}


// Actions
export class LoadCards implements Action {
  readonly type = OuterGameActionTypes.LOAD_CARDS
}
export class LoadCardsSuccess implements Action {
  readonly type = OuterGameActionTypes.LOAD_CARDS_SUCCESS
  constructor(public payload: CardsRemote) {}
}

export class Play implements Action {
  readonly type = OuterGameActionTypes.PLAY
}

export class Save implements Action {
  readonly type = OuterGameActionTypes.SAVE
}
export class SaveFail implements Action {
  readonly type = OuterGameActionTypes.SAVE_FAIL
  constructor(public payload: GameError) {}
}
export class SaveSuccess implements Action {
  readonly type = OuterGameActionTypes.SAVE_SUCCESS
}

export class SetActiveGame implements Action {
  readonly type = OuterGameActionTypes.SET_ACTIVE_GAME
  constructor(public payload: GameDetails) {}
}

export class ResetActiveGame implements Action {
  readonly type = OuterGameActionTypes.RESET_ACTIVE_GAME
}
export class ResetCardsState implements Action {
  readonly type = OuterGameActionTypes.RESET_CARDS_STATE
}

// Action types
export type OuterGameActionsUnion =
  | LoadCards
  | LoadCardsSuccess

  | Play

  | Save
  | SaveFail
  | SaveSuccess

  | SetActiveGame

  | ResetActiveGame
  | ResetCardsState
