import { PIRATE_CARDS } from '../../data/pirate-cards.data'

// PirateCards don't extend Card: there is simply one of each.

export enum PirateCardAbility {
  NONE = 0,

  BATTLE_CARD_COST_TWO,
  HALF_BATTLE_CARDS_COUNT,
  BATTLE_CARDS_PLUS_ONE_POINT,
  TWO_HAZARD_POINTS_FOR_EACH_AGING_CARD,
  FIGHT_REMAINING_HAZARD_CARDS,
}

export interface PirateCard {
  readonly ability: PirateCardAbility
  readonly id: number

  freeCardAmount: number // if null: needs to be calculated at the start of the final
  hazardPoints: number // if null: needs to be calculated at the start of the final
}

export const createPirateCardDeck = (cards = PIRATE_CARDS): PirateCard[] => {
  return cards
}
