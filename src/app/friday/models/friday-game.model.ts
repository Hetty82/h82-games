import { HttpErrorResponse } from '@angular/common/http'


export type GameId = number
export type GameError = HttpErrorResponse

enum Difficulty {
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
    public difficulty: Difficulty = Difficulty.LEVEL_1,
  ) {  }
}

export const createTestGame = (id = 1, userId = 1): FridayGame => {
  return {
    ...new FridayGame(1),
    id,
  }
}
