import { GameDifficulty } from '../friday-game.model'
import { BattleCard } from './friday-battle-cards'
import { BattleData, BattleCardName, Card } from './friday-robinson-cards'

import { AGING_CARDS } from '../../data/aging-cards.data'
import { BATTLE_DATAS } from '../../data/battle-datas.data'

import { processCardAmounts } from '../../helpers/card.helpers'

export enum AgingCardDifficulty {
  NORMAL = 1,
  HIGH = 2,
}

export interface AgingCard extends Card {
  readonly difficulty: AgingCardDifficulty
  readonly battleDataId: number
  battleData?: BattleData
}

export const createAgingCardDecks = (
  difficulty: GameDifficulty,
  datas = BATTLE_DATAS,
  cards = AGING_CARDS,
): [ BattleCard[], BattleCard[] ] => {

  cards = cards.map(card => {
    card.battleData = datas.find(data => data.id === card.battleDataId)

    return card
  })

  if ([ GameDifficulty.LEVEL_1, GameDifficulty.LEVEL_2 ].includes(difficulty)) {
    cards = cards.filter(card => card.battleData.name !== BattleCardName.VERY_STUPID)
  }

  cards = cards.reduce(processCardAmounts, [])

  return [
    cards.filter(card => card.difficulty === AgingCardDifficulty.NORMAL)
      .map((card, index) => new BattleCard(card.battleData, index + 1, true)),
    cards.filter(card => card.difficulty === AgingCardDifficulty.HIGH)
      .map((card, index) => new BattleCard(card.battleData, index + 1, true)),
  ]
}
