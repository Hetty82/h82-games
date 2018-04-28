import { BattleData, Card } from './friday-robinson-cards'

import { HAZARD_CARDS } from '../../data/hazard-cards.data'
import { BATTLE_DATAS } from '../../data/battle-datas.data'
import { HAZARDS } from '../../data/hazards.data'

import { processCardAmounts } from '../../helpers/card.helpers'

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

export interface HazardCard extends Card {
  readonly battleDataId: number
  readonly hazardId: number

  battleData?: BattleData
  hazard?: Hazard
  id?: number
}

export interface Hazard {
  readonly freeCardAmount: number
  readonly hazardPoints: HazardPoints
  readonly id: number
  readonly name: HazardCardName
}

export const createHazardCardDeck = (cards = HAZARD_CARDS, datas = BATTLE_DATAS, hazards = HAZARDS): HazardCard[] => {
  cards = cards.map(card => {
    card.battleData = datas.find(data => data.id === card.battleDataId)

    return card
  }).map(card => {
    card.hazard = hazards.find(hazard => hazard.id === card.hazardId)

    return card
  })

  cards = cards.reduce(processCardAmounts, [])

  return cards.map((card, index) => {
    card.id = index + 1

    return card
  })
}
