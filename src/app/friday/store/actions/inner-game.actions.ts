import { Action } from '@ngrx/store'

import { Deck, HazardCardId, BattleComboId } from '../../models/card.interfaces'
import { GameDifficulty } from '../../models/game.interfaces'

export enum InnerGameActionTypes {
  // Init game
  INIT_GAME = '[Friday - Game] Init game',
  INIT_GAME_SUCCESS = '[Friday - Game] Init game success',
  // Hazard phase
  DISCARD_HAZARD = '[Friday - Game] Discard the last hazard card',
  DRAW_HAZARDS = '[Friday - Game] Draw two hazards',
  PLAY_HAZARD = '[Friday - Game] Play a hazard',
  // Battle phase
  DESELECT_FOR_DESTRUCTION = '[Friday - Game] Deselect battle card to destroy',
  SELECT_FOR_DESTRUCTION = '[Friday - Game] Select battle card to destroy',
  LOSE_BATTLE = '[Friday - Game] End the battle by losing, use remaining mandatory abilities, and pay with your lives',
  LOSE_BATTLE_CANCEL = '[Friday - Game] Cancel lose battle',
  LOSE_BATTLE_CONFIRM = '[Friday - Game] Confirm lose battle',
  PICK_CARD_TO_USE_WITH_ABILITY = '[Friday - Game] Pick a card to use with this ability',
  PLAY_FREE_BATTLE_CARD = '[Friday - Game] Play a free battle card',
  PLAY_PAID_BATTLE_CARD = '[Friday - Game] Play a paid battle card',
  USE_CARD_ABILITY = '[Friday - Game] Use any card\'s ability',
  USE_CARD_ABILITY_AGAIN = '[Friday - Game] Use card\'s ability again',
  WIN_BATTLE = '[Friday - Game] End the battle by winning, use remaining mandatory abilities, and gain the hazard card',
  // End of pile
  SHUFFLE_BATTLE_CARDS = '[Friday - Game] Add an aging card and shuffle battle cards',
  SHUFFLE_BATTLE_CARDS_SUCCESS = '[Friday - Game] Shuffle battle cards success',
  SHUFFLE_HAZARD_CARDS = '[Friday - Game] Shuffle hazard cards and start the next round',
  SHUFFLE_HAZARD_CARDS_SUCCESS = '[Friday - Game] Shuffle hazard cards success',
  // Final
  START_FINAL = '[Friday - Game] Start the final and calculate pirate card values',
  PLAY_PIRATE = '[Friday - Game] Pick a pirate card',
}
 type RemainingPoints = number

 // Actions
export class InitGame implements Action {
  readonly type = InnerGameActionTypes.INIT_GAME
  constructor(public payload: GameDifficulty) {}
}
export class InitGameSuccess implements Action {
  readonly type = InnerGameActionTypes.INIT_GAME_SUCCESS
  constructor(public payload: Deck) {}
}

export class DiscardHazard implements Action {
  readonly type = InnerGameActionTypes.DISCARD_HAZARD
}
export class DrawHazards implements Action {
  readonly type = InnerGameActionTypes.DRAW_HAZARDS
}
export class PlayHazard implements Action {
  readonly type = InnerGameActionTypes.PLAY_HAZARD
  constructor(public payload: HazardCardId) {}
}

export class SelectForDestruction implements Action {
  readonly type = InnerGameActionTypes.SELECT_FOR_DESTRUCTION
  constructor(public payload: BattleComboId) {}
}
export class DeselectForDestruction implements Action {
  readonly type = InnerGameActionTypes.DESELECT_FOR_DESTRUCTION
  constructor(public payload: BattleComboId) {}
}

export class LoseBattle implements Action {
  readonly type = InnerGameActionTypes.LOSE_BATTLE
}
export class LoseBattleCancel implements Action {
  readonly type = InnerGameActionTypes.LOSE_BATTLE_CANCEL
}
export class LoseBattleConfirm implements Action {
  readonly type = InnerGameActionTypes.LOSE_BATTLE_CONFIRM
  constructor(public payload: RemainingPoints) {}
}
export class PickCardToUseWithAbility implements Action {
  readonly type = InnerGameActionTypes.PICK_CARD_TO_USE_WITH_ABILITY
}
export class PlayFreeBattleCard implements Action {
  readonly type = InnerGameActionTypes.PLAY_FREE_BATTLE_CARD
}
export class PlayPaidBattleCard implements Action {
  readonly type = InnerGameActionTypes.PLAY_PAID_BATTLE_CARD
}
export class UseCardAbility implements Action {
  readonly type = InnerGameActionTypes.USE_CARD_ABILITY
}
export class UseCardAbilityAgain implements Action {
  readonly type = InnerGameActionTypes.USE_CARD_ABILITY_AGAIN
}
export class WinBattle implements Action {
  readonly type = InnerGameActionTypes.WIN_BATTLE
  constructor(public payload: BattleComboId) {}
}

export class ShuffleBattleCards implements Action {
  readonly type = InnerGameActionTypes.SHUFFLE_BATTLE_CARDS
}
export class ShuffleBattleCardsSuccess implements Action {
  readonly type = InnerGameActionTypes.SHUFFLE_BATTLE_CARDS_SUCCESS
  constructor(public payload: BattleComboId[]) {}

}
export class ShuffleHazardCards implements Action {
  readonly type = InnerGameActionTypes.SHUFFLE_BATTLE_CARDS
}
export class ShuffleHazardCardsSuccess implements Action {
  readonly type = InnerGameActionTypes.SHUFFLE_HAZARD_CARDS_SUCCESS
  constructor(public payload: HazardCardId[]) {}
}

export class StartFinal implements Action {
  readonly type = InnerGameActionTypes.START_FINAL
}
export class PlayPirate implements Action {
  readonly type = InnerGameActionTypes.PLAY_PIRATE
}


export type InnerGameActionsUnion =
  | InitGame
  | InitGameSuccess

  | DiscardHazard
  | DrawHazards
  | PlayHazard

  | SelectForDestruction
  | DeselectForDestruction
  | LoseBattle
  | LoseBattleCancel
  | LoseBattleConfirm
  | PickCardToUseWithAbility
  | PlayPaidBattleCard
  | PlayFreeBattleCard
  | UseCardAbility
  | UseCardAbilityAgain
  | WinBattle

  | ShuffleBattleCards
  | ShuffleBattleCardsSuccess
  | ShuffleHazardCards
  | ShuffleHazardCardsSuccess

  | StartFinal
  | PlayPirate
