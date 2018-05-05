import { AgingCardRemote, AgingCardDifficulty } from '../models/card.interfaces'


export const AGING_CARDS: AgingCardRemote[] = [
  {
    amount: 1,
    // DISTRACTED - -1
    battleComboId: 5,
    difficulty: AgingCardDifficulty.NORMAL,
    id: 1,
  },
  {
    amount: 1,
    // HUNGRY - 0
    battleComboId: 15,
    difficulty: AgingCardDifficulty.NORMAL,
    id: 2,
  },
  {
    amount: 2,
    // SCARED - 0
    battleComboId: 25,
    difficulty: AgingCardDifficulty.NORMAL,
    id: 3,
  },
  {
    amount: 2,
    // STUPID - -2
    battleComboId: 29,
    difficulty: AgingCardDifficulty.NORMAL,
    id: 4,
  },
  {
    amount: 1,
    // VERY_STUPID - -3
    battleComboId: 32,
    difficulty: AgingCardDifficulty.NORMAL,
    id: 5,
  },
  {
    amount: 1,
    // VERY_TIRED - 0
    battleComboId: 33,
    difficulty: AgingCardDifficulty.NORMAL,
    id: 6,
  },

  {
    amount: 1,
    // MORONIC - -4
    battleComboId: 18,
    difficulty: AgingCardDifficulty.HARD,
    id: 7,
  },
  {
    amount: 1,
    // SUICIDAL - -5
    battleComboId: 30,
    difficulty: AgingCardDifficulty.HARD,
    id: 8,
  },
  {
    amount: 1,
    // VERY_HUNGRY - 0
    battleComboId: 31,
    difficulty: AgingCardDifficulty.HARD,
    id: 9,
  },
]
