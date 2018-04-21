export enum Round {
  INITIAL = 0,
  GREEN = 1,
  YELLOW = 2,
  RED = 3,
  FINAL = 4,
}

export interface FridayGameDetails {
  currentRound: Round
}

export const createFridayTestGameDetails = (currentRound = Round.INITIAL): FridayGameDetails => {
  return {
    currentRound,
  }
}
