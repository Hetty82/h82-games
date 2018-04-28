import { HttpErrorResponse } from '@angular/common/http'


export type GameId = number
export type GameError = HttpErrorResponse

export enum GameDifficulty {
  LEVEL_1 = 1,
  LEVEL_2 = 2,
  LEVEL_3 = 3,
  LEVEL_4 = 4,
}

export class FridayGame {
  id: GameId
  createdAt = new Date()

  constructor(
    public userId: number,
    public difficulty: GameDifficulty = GameDifficulty.LEVEL_1,
  ) {  }
}

export const createTestGame = (id = 1, userId = 1): FridayGame => {
  return {
    ...new FridayGame(userId),
    id,
  }
}
