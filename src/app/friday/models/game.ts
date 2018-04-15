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
