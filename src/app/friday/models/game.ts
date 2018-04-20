import { GameDetails } from './game-details'


enum Difficulty {
  LEVEL_1 = 1,
  LEVEL_2 = 2,
  LEVEL_3 = 3,
  LEVEL_4 = 4,
}

export interface Game {
  details: GameDetails
  difficulty: Difficulty
  id: number
  startDate: Date
  userId: number
}

const date = new Date(2018, 4, 20)

export const createTestGame = (id = 1, userId = 1): Game => {
  return {
    details: null,
    difficulty: Difficulty.LEVEL_1,
    id,
    startDate: date,
    userId,
  }
}
