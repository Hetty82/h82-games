export enum Round {
  INITIAL = 0,
  GREEN = 1,
  YELLOW = 2,
  RED = 3,
  FINAL = 4,
}

export interface GameDetails {
  currentRound: Round
}
