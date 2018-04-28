import { BattleCard } from './friday-battle-cards'
import { processCardAmounts } from '../../helpers/card.helpers'

import { BATTLE_DATAS } from '../../data/battle-datas.data'
import { ROBINSON_CARDS } from '../../data/robinson-cards.data'

export enum BattleCardDestroyCost {
  NORMAL = 1,
  HIGH = 2,
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

export enum BattleCardName {
  BOOKS = 'books',
  DECEPTION = 'deception',
  DISTRACTED = 'distracted',
  EATING = 'eating',
  EQUIPMENT = 'equipent',
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

export interface Card {
  readonly amount: number
}

export interface RobinsonCard extends Card {
  readonly battleDataId: number
  battleData?: BattleData
}

export interface BattleData {
  readonly ability: BattleCardAbility
  readonly battlePoints: number
  readonly id: number
  readonly name: BattleCardName
}

export const createRobinsonCardDeck = (cards = ROBINSON_CARDS, datas = BATTLE_DATAS): BattleCard[] => {
  cards = cards.map(card => {
    card.battleData = datas.find(data => data.id === card.battleDataId)

    return card
  })

  cards = cards.reduce(processCardAmounts, [])

  return cards.map((card, index) => new BattleCard(card.battleData, index + 1))
}
