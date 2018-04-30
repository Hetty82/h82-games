import {
  AgingCardInterface, AgingCardRemote, AgingCardDifficulty,
  BattleCardName, BattleData, RobinsonCardInterface, RobinsonCardRemote,
  Hazard, HazardCardInterface, HazardCardRemote, PirateCardRemote,
} from '../models/card.interfaces'
import { BattleCard } from '../models/battle-card.model'
import { GameDifficulty } from '../models/friday-game.model'

import { processCardAmounts } from './card.helpers'


export const createAgingCardDecks = (remotes: AgingCardRemote[], datas: BattleData[], difficulty: GameDifficulty): [
  BattleCard[], BattleCard[]
] => {

  remotes = remotes.reduce(processCardAmounts, [])

  let cards: AgingCardInterface[] = remotes.map(remote => ({
    battleData: datas.find(data => data.id === remote.battleDataId),
    difficulty: remote.difficulty,
  }))

  if ([ GameDifficulty.LEVEL_1, GameDifficulty.LEVEL_2 ].includes(difficulty)) {
    cards = cards.filter(card => card.battleData.name !== BattleCardName.VERY_STUPID)
  }

  const normalCards = cards.filter(card => card.difficulty === AgingCardDifficulty.NORMAL)
  const hardCards = cards.filter(card => card.difficulty === AgingCardDifficulty.HARD)

  return [
    normalCards.map((card, index) => new BattleCard(card.battleData, index + 1, true)),
    hardCards.map((card, index) => new BattleCard(card.battleData, index + normalCards.length + 1, true)),
  ]
}

export const createHazardCardDeck = (remotes: HazardCardRemote[], datas: BattleData[], hazards: Hazard[]): HazardCardInterface[] => {
  remotes = remotes.reduce(processCardAmounts, [])

  const cards: HazardCardInterface[] = remotes.map((remote, index) => ({
    battleData: datas.find(data => data.id === remote.battleDataId),
    hazard: hazards.find(hazard => hazard.id === remote.hazardId),
    id: index + 1,
  }))

  return cards
}

export const createPirateCardDeck = (remotes: PirateCardRemote[]): PirateCardRemote[] => {
  return remotes
}

export const createRobinsonCardDeck = (remotes: RobinsonCardRemote[], datas: BattleData[]): BattleCard[] => {
  remotes = remotes.reduce(processCardAmounts, [])

  const cards: RobinsonCardInterface[] = remotes.map(remote => ({
    battleData: datas.find(data => data.id === remote.battleDataId),
  }))


  return cards.map((card, index) => new BattleCard(card.battleData, index + 1))
}

