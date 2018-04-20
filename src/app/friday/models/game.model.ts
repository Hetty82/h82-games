import { GameDetails } from './game-details.interface'


enum Difficulty {
  LEVEL_1 = 1,
  LEVEL_2 = 2,
  LEVEL_3 = 3,
  LEVEL_4 = 4,
}

export class Game {
  details: GameDetails
  id: number
  startDate = new Date()

  constructor(
    public userId: number,
    public difficulty: Difficulty = Difficulty.LEVEL_1,
  ) {  }
}

export const createTestGame = (id = 1, userId = 1): Game => {
  return {
    ...new Game(1),
    id,
  }
}
