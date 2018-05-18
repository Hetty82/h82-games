export type BattleComboId = number
export type HazardComboId = number

export type AgingCardId = number
export type HazardCardId = number
export type PirateCardId = number
export type RobinsonCardId = number


export interface CardRemote {
  readonly amount: number
  readonly id: number
}

export interface CardsRemote {
  battleCombos: BattleCombo[],
  hazardCombos: HazardCombo[],

  agingCards: AgingCardRemote[],
  hazardCards: HazardCardRemote[],
  pirateCards: PirateCardRemote[],
  robinsonCards: RobinsonCardRemote[],
}

export enum BattleCardAbility {
  NONE = 0,

  BELOW_THE_STACK_ONE,
  COPY_ONE,
  DESTROY_ONE,
  DOUBLE_ONE,
  EXCHANGE_ONE,
  EXCHANGE_TWO,
  HIGHEST_CARD_ZERO,
  MINUS_ONE_LIFE,
  MINUS_ONE_STEP,
  MINUS_TWO_LIVES,
  PLUS_ONE_CARD,
  PLUS_ONE_LIFE,
  PLUS_TWO_CARDS,
  PLUS_TWO_LIVES,
  SORT_THREE,
  STOP,
}

export enum BattleCardDestroyCost {
  NORMAL = 1,
  HIGH = 2,
}

export enum BattleCardName {
  BOOKS = 'books',
  DECEPTION = 'deception',
  DISTRACTED = 'distracted',
  EATING = 'eating',
  EQUIPMENT = 'equipment',
  EXPERIENCE = 'experience',
  FOCUSED = 'focused',
  FOOD = 'food',
  GENIUS = 'genius',
  HUNGRY = 'hungry',
  MIMICRY = 'mimicry',
  MORONIC = 'moronic',
  REALIZATION = 'realization',
  REPEAT = 'repeat',
  SCARED = 'scared',
  STRATEGY = 'strategy',
  STUPID = 'stupid',
  SUICIDAL = 'suicidal',
  VERY_HUNGRY = 'very hungry',
  VERY_STUPID = 'very stupid',
  VERY_TIRED = 'very tired',
  VISION = 'vision',
  WEAK = 'weak',
  WEAPON = 'weapon',
}

export interface BattleCombo {
  readonly ability: BattleCardAbility
  readonly battlePoints: number
  readonly id: BattleComboId
  readonly isAgingCard: boolean
  readonly name: BattleCardName
}

// RobinsonCards
export interface RobinsonCardRemote extends CardRemote {
  readonly battleComboId: BattleComboId
}

// Aging cards
export enum AgingCardDifficulty {
  NORMAL = 1,
  HARD = 2,
}

export interface AgingCardRemote extends CardRemote {
  readonly difficulty: AgingCardDifficulty
  readonly battleComboId: BattleComboId
}

// Hazard cards
export enum HazardPointsType {
  P_0_1_3 = 1,
  P_1_3_6 = 2,
  P_2_5_8 = 3,
  P_4_7_11 = 4,
  P_5_9_14 = 5,
}

export enum HazardCardName {
  CANNIBALS = 'Cannibals',
  EXPLORING_THE_ISLAND = 'Exploring the island',
  FURTHER_EXPLORING_THE_ISLAND = 'Further exploring the island',
  WILD_ANIMALS = 'Wild animals',
  WITH_THE_RAFT_TO_THE_WRECK = 'With the raft to the wreck',
}

export interface HazardCombo {
  readonly freeCardAmount: number
  readonly hazardPoints: HazardPointsType
  readonly id: number
  readonly name: HazardCardName
}

export interface HazardCardRemote extends CardRemote {
  readonly battleComboId: number
  readonly hazardComboId: number
}

// PirateCards don't extend Card: there is simply one of each.
export enum PirateCardAbility {
  NONE = 0,

  BATTLE_CARD_COST_TWO,
  HALF_BATTLE_CARDS_COUNT,
  BATTLE_CARDS_PLUS_ONE_POINT,
  TWO_HAZARD_POINTS_FOR_EACH_AGING_CARD,
  FIGHT_REMAINING_HAZARD_CARDS,
}

export interface PirateCardRemote {
  readonly ability: PirateCardAbility
  readonly id: number

  freeCardAmount: number // if null: needs to be calculated at the start of the final
  hazardPoints: number // if null: needs to be calculated at the start of the final
}

export interface Deck {
  agingCardDeck: BattleComboId[],
  hazardCardDeck: HazardCardId[],
  pirateCardIds: PirateCardId[],
  robinsonCardDeck: BattleComboId[],
}
