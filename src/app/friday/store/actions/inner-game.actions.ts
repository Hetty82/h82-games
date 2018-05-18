import { Action } from '@ngrx/store'

import { Deck, HazardCardId } from '../../models/card.interfaces'
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
  DESTROY_BATTLE_CARDS = '[Friday - Game] Destroy battle cards with your payed lives',
  LOSE_BATTLE = '[Friday - Game] End the battle by losing, use remaining mandatory abilities, and pay with your lives',
  PICK_CARD_TO_USE_WITH_ABILITY = '[Friday - Game] Pick a card to use with this ability',
  PLAY_FREE_BATTLE_CARD = '[Friday - Game] Draw a free battle card',
  PLAY_PAID_BATTLE_CARD = '[Friday - Game] Buy a battle card',
  USE_CARD_ABILITY = '[Friday - Game] Use any card\'s ability',
  USE_CARD_ABILITY_AGAIN = '[Friday - Game] Use card\'s ability again',
  WIN_BATTLE = '[Friday - Game] End the battle by winning, use remaining mandatory abilities, and gain the hazard card',
  // End of pile
  SHUFFLE_BATTLE_CARDS = '[Friday - Game] Add an aging card and shuffle battle card pile',
  SHUFFLE_HAZARD_CARDS = '[Friday - Game] Shuffle hazard cards and start the next round',
  // Final
  START_FINAL = '[Friday - Game] Start the final and calculate pirate card values',
  PLAY_PIRATE = '[Friday - Game] Pick a pirate card',
}

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

export class DestroyBattleCards implements Action {
  readonly type = InnerGameActionTypes.DESTROY_BATTLE_CARDS
}
export class LoseBattle implements Action {
  readonly type = InnerGameActionTypes.LOSE_BATTLE
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
}

export class ShuffleBattleCards implements Action {
  readonly type = InnerGameActionTypes.SHUFFLE_BATTLE_CARDS
}
export class ShuffleHazardCards implements Action {
  readonly type = InnerGameActionTypes.SHUFFLE_HAZARD_CARDS
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

  | DestroyBattleCards
  | LoseBattle
  | PickCardToUseWithAbility
  | PlayPaidBattleCard
  | PlayFreeBattleCard
  | UseCardAbility
  | UseCardAbilityAgain
  | WinBattle

  | ShuffleBattleCards
  | ShuffleHazardCards

  | StartFinal
  | PlayPirate
