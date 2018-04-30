import { GameId, FridayGame, GameDifficulty } from './friday-game.model'

export enum GameRound {
  INITIAL = 0,
  GREEN = 1,
  YELLOW = 2,
  RED = 3,
  FINAL = 4,
}

export class FridayGameDetails {
  id: GameId
  currentRound = GameRound.INITIAL
  difficulty: GameDifficulty

  constructor(game: FridayGame) {
    this.id = game.id
    this.difficulty = game.difficulty
  }
}

export const createFridayTestGameDetails = (game = new FridayGame(1)): FridayGameDetails => {
  return new FridayGameDetails(game)
}
