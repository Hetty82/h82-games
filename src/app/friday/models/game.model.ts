import { GameId, GameDifficulty } from './game.interfaces'

export class Game {
  id: GameId
  createdAt = new Date()

  constructor(
    public userId: number,
    public difficulty: GameDifficulty = GameDifficulty.LEVEL_1,
  ) {  }
}

export const createTestGame = (id = 1, userId = 1): Game => {
  return {
    ...new Game(userId),
    id,
  }
}
