import { HttpErrorResponse } from '@angular/common/http'

export type GameId = number
export type GameError = HttpErrorResponse

export enum GameDifficulty {
  LEVEL_1 = 1,
  LEVEL_2 = 2,
  LEVEL_3 = 3,
  LEVEL_4 = 4,
}

export enum GameRound {
  INITIAL = 0,
  ONE = 1,      // green
  TWO = 2,      // yellow
  THREE = 3,    // red
  FINAL = 4,
}
