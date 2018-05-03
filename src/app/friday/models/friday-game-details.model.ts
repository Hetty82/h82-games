import { GameId, FridayGame, GameDifficulty } from './friday-game.model'
import { BattleCard } from './battle-card.model'
import { Hazard, HazardCardInterface, PirateCardRemote } from './card.interfaces'

export enum GameRound {
  INITIAL = 0,
  ONE = 1, // green
  TWO = 2, // yellow
  THREE = 3, // red
  FINAL = 4,
}

export interface Battle {
  activeBattlePoints: number
  activeFreeBattleCards: BattleCard[]
  activeHazard: Hazard
  activePayedBattleCards: BattleCard[]
}

export interface CardPiles {
  destroyedCards: BattleCard[]

  agingCardPile: BattleCard[]
  hazardCardPile: HazardCardInterface[]
  hazardCardDiscardPile: HazardCardInterface[]
  pirateCards: PirateCardRemote[]
  robinsonCardPile: BattleCard[]
  robinsonCardDiscardPile: BattleCard[]
}

export class FridayGameDetails {
  currentRound = GameRound.INITIAL
  difficulty: GameDifficulty
  id: GameId

  battle: Battle
  lives: number
  piles: CardPiles

  constructor(game: FridayGame) {
    this.id = game.id
    this.difficulty = game.difficulty
  }
}

export const createFridayTestGameDetails = (game = new FridayGame(1)): FridayGameDetails => {
  return new FridayGameDetails(game)
}
