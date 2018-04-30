
export interface CardRemote {
  readonly amount: number
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

export interface BattleData {
  readonly ability: BattleCardAbility
  readonly battlePoints: number
  readonly id: number
  readonly name: BattleCardName
}

// RobinsonCards
export interface RobinsonCardRemote extends CardRemote {
  readonly battleDataId: number
}

export interface RobinsonCardInterface {
  readonly battleData: BattleData
}

// Aging cards
export enum AgingCardDifficulty {
  NORMAL = 1,
  HARD = 2,
}

export interface AgingCardRemote extends CardRemote {
  readonly difficulty: AgingCardDifficulty
  readonly battleDataId: number
}

export interface AgingCardInterface {
  readonly difficulty: AgingCardDifficulty
  readonly battleData: BattleData
}

// Hazard cards
export enum HazardPoints {
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

export interface Hazard {
  readonly freeCardAmount: number
  readonly hazardPoints: HazardPoints
  readonly id: number
  readonly name: HazardCardName
}

export interface HazardCardRemote extends CardRemote {
  readonly battleDataId: number
  readonly hazardId: number
}

export interface HazardCardInterface {
  readonly battleData: BattleData
  readonly hazard: Hazard
  readonly id: number
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
