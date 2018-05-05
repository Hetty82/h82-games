import { Game } from './game.model'
import { GameId, GameDifficulty, GameRound } from './game.interfaces'
import { BattleComboId, HazardCardId, PirateCardId } from './card.interfaces'

// The same as the activeGameState, minus the status properties
export class GameDetails {
  currentRound = GameRound.INITIAL
  difficulty: GameDifficulty
  id: GameId
  lives: number

  // Cards
  destroyedCardIds: BattleComboId[] = []

  agingCardDeck: BattleComboId[] = []
  robinsonCardDeck: BattleComboId[] = []
  robinsonDiscardPile: BattleComboId[] = []

  hazardCardDeck: HazardCardId[] = []
  hazardCardOptions: HazardCardId[] = []
  hazardDiscardPile: HazardCardId[] = []

  pirateCardIds: PirateCardId[] = []

  // Battle
  playedHazardCardId: HazardCardId

  constructor(game: Game) {
    this.id = game.id
    this.difficulty = game.difficulty
  }
}

export const createTestGameDetails = (game = new Game(1)): GameDetails => {
  return new GameDetails(game)
}
