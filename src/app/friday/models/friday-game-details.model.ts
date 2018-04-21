import { GameId } from './friday-game.model'

export enum Round {
  INITIAL = 0,
  GREEN = 1,
  YELLOW = 2,
  RED = 3,
  FINAL = 4,
}

export class FridayGameDetails {
  constructor(
    public id: GameId,
    public currentRound = Round.INITIAL,
  ) { }
}

export const createFridayTestGameDetails = (id: GameId, currentRound = Round.INITIAL): FridayGameDetails => {
  return {
    currentRound,
    id,
  }
}
