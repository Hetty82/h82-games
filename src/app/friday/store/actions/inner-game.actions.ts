import { Action } from '@ngrx/store'

import { Deck, HazardCardId } from '../../models/card.interfaces'
import { GameDifficulty } from '../../models/game.interfaces'


// Init game
export const INIT_GAME = '[Friday - Game] Init game'
export const INIT_GAME_SUCCESS = '[Friday - Game] Init game success'

// Hazard phase
export const DISCARD_HAZARD = '[Friday - Game] Discard the last hazard card'
export const DRAW_HAZARDS = '[Friday - Game] Draw two hazards'
export const PLAY_HAZARD = '[Friday - Game] Play a hazard'

// Battle phase
export const BUY_BATTLE_CARD = '[Friday - Game] Buy a battle card'
export const DESTROY_BATTLE_CARDS = '[Friday - Game] Destroy battle cards with your payed lives'
export const DRAW_FREE_BATTLE_CARD = '[Friday - Game] Draw a free battle card'
export const LOSE_BATTLE = '[Friday - Game] End the battle by losing, use remaining mandatory abilities, and pay with your lives'
export const PICK_CARD_TO_USE_WITH_ABILITY = '[Friday - Game] Pick a card to use with this ability'
export const USE_CARD_ABILITY = '[Friday - Game] Use any card\'s ability'
export const USE_CARD_ABILITY_AGAIN = '[Friday - Game] Use card\'s ability again'
export const WIN_BATTLE = '[Friday - Game] End the battle by winning, use remaining mandatory abilities, and gain the hazard card'

// End of pile
export const SHUFFLE_BATTLE_CARDS = '[Friday - Game] Add an aging card and shuffle battle card pile'
export const SHUFFLE_HAZARD_CARDS = '[Friday - Game] Shuffle hazard cards and start the next round'

// Final
export const START_FINAL = '[Friday - Game] Start the final and calculate pirate card values'
export const PLAY_PIRATE = '[Friday - Game] Pick a pirate card'

// Actions
export class InitGame implements Action {
  readonly type = INIT_GAME
  constructor(public payload: GameDifficulty) {}
}
export class InitGameSuccess implements Action {
  readonly type = INIT_GAME_SUCCESS
  constructor(public payload: Deck) {}
}

export class DiscardHazard implements Action {
  readonly type = DISCARD_HAZARD
}
export class DrawHazards implements Action {
  readonly type = DRAW_HAZARDS
}
export class PlayHazard implements Action {
  readonly type = PLAY_HAZARD
  constructor(public payload: HazardCardId) {}
}

export class BuyBattleCard implements Action {
  readonly type = BUY_BATTLE_CARD
}
export class DestroyBattleCards implements Action {
  readonly type = DESTROY_BATTLE_CARDS
}
export class DrawFreeBattleCard implements Action {
  readonly type = DRAW_FREE_BATTLE_CARD
}
export class LoseBattle implements Action {
  readonly type = LOSE_BATTLE
}
export class PickCardToUseWithAbility implements Action {
  readonly type = PICK_CARD_TO_USE_WITH_ABILITY
}
export class UseCardAbility implements Action {
  readonly type = USE_CARD_ABILITY
}
export class UseCardAbilityAgain implements Action {
  readonly type = USE_CARD_ABILITY_AGAIN
}
export class WinBattle implements Action {
  readonly type = WIN_BATTLE
}

export class ShuffleBattleCards implements Action {
  readonly type = SHUFFLE_BATTLE_CARDS
}
export class ShuffleHazardCards implements Action {
  readonly type = SHUFFLE_HAZARD_CARDS
}

export class StartFinal implements Action {
  readonly type = START_FINAL
}
export class PlayPirate implements Action {
  readonly type = PLAY_PIRATE
}


export type InnerGameAction =
  | InitGame
  | InitGameSuccess

  | DiscardHazard
  | DrawHazards
  | PlayHazard

  | BuyBattleCard
  | DestroyBattleCards
  | DrawFreeBattleCard
  | LoseBattle
  | PickCardToUseWithAbility
  | UseCardAbility
  | UseCardAbilityAgain
  | WinBattle

  | ShuffleBattleCards
  | ShuffleHazardCards

  | StartFinal
  | PlayPirate
