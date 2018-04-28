import { AgingCard, AgingCardDifficulty } from '../models/cards/friday-aging-cards'

export const AGING_CARDS: AgingCard[] = [
  {
    amount: 1,
    // DISTRACTED - -1
    battleDataId: 4,
    difficulty: AgingCardDifficulty.NORMAL,
  },
  {
    amount: 1,
    // HUNGRY - 0
    battleDataId: 14,
    difficulty: AgingCardDifficulty.NORMAL,
  },
  {
    amount: 2,
    // SCARED - 0
    battleDataId: 24,
    difficulty: AgingCardDifficulty.NORMAL,
  },
  {
    amount: 2,
    // STUPID - -2
    battleDataId: 28,
    difficulty: AgingCardDifficulty.NORMAL,
  },
  {
    amount: 1,
    // VERY_STUPID - -3
    battleDataId: 31,
    difficulty: AgingCardDifficulty.NORMAL,
  },
  {
    amount: 1,
    // VERY_TIRED - 0
    battleDataId: 32,
    difficulty: AgingCardDifficulty.NORMAL,
  },

  {
    amount: 1,
    // MORONIC - -4
    battleDataId: 17,
    difficulty: AgingCardDifficulty.HIGH,
  },
  {
    amount: 1,
    // SUICIDAL - -5
    battleDataId: 29,
    difficulty: AgingCardDifficulty.HIGH,
  },
  {
    amount: 1,
    // VERY_HUNGRY - 0
    battleDataId: 30,
    difficulty: AgingCardDifficulty.HIGH,
  },
]

