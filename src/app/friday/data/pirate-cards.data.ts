import { PirateCard, PirateCardAbility } from '../models/cards/friday-pirate-cards'

export const PIRATE_CARDS: PirateCard[] = [
  {
    ability: PirateCardAbility.NONE,
    freeCardAmount: 6,
    hazardPoints: 20,
    id: 1,
  },
  {
    ability: PirateCardAbility.NONE,
    freeCardAmount: 7,
    hazardPoints: 25,
    id: 2,
  },
  {
    ability: PirateCardAbility.NONE,
    freeCardAmount: 8,
    hazardPoints: 30,
    id: 3,
  },
  {
    ability: PirateCardAbility.NONE,
    freeCardAmount: 9,
    hazardPoints: 35,
    id: 4,
  },
  {
    ability: PirateCardAbility.NONE,
    freeCardAmount: 10,
    hazardPoints: 40,
    id: 5,
  },

  // Handicap
  {
    ability: PirateCardAbility.BATTLE_CARD_COST_TWO,
    freeCardAmount: 7,
    hazardPoints: 16,
    id: 6,
  },
  {
    ability: PirateCardAbility.HALF_BATTLE_CARDS_COUNT,
    freeCardAmount: 9,
    hazardPoints: 22,
    id: 7,
  },

  // Help
  {
    ability: PirateCardAbility.BATTLE_CARDS_PLUS_ONE_POINT,
    freeCardAmount: 10,
    hazardPoints: 52,
    id: 8,
  },

  // Variable
  {
    ability: PirateCardAbility.TWO_HAZARD_POINTS_FOR_EACH_AGING_CARD,
    freeCardAmount: 5,
    hazardPoints: null,
    id: 9,
  },
  {
    ability: PirateCardAbility.FIGHT_REMAINING_HAZARD_CARDS,
    freeCardAmount: null,
    hazardPoints: null,
    id: 10,
  },
]
