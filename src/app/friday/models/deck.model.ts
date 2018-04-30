import {
  AgingCardRemote, BattleData,
  Hazard, HazardCardInterface, HazardCardRemote,
  PirateCardRemote, RobinsonCardRemote,
} from './card.interfaces'
import { BattleCard } from './battle-card.model'
import { GameDifficulty } from './friday-game.model'

import { createAgingCardDecks, createRobinsonCardDeck, createPirateCardDeck, createHazardCardDeck } from '../helpers/deck.helpers'
import { shuffle } from '../helpers/card.helpers'

export interface RemoteCardSet {
  agingCards: AgingCardRemote[],
  battleDatas: BattleData[],
  hazardCards: HazardCardRemote[],
  hazards: Hazard[],
  pirateCards: PirateCardRemote[],
  robinsonCards: RobinsonCardRemote[],
}

export class Deck {
  agingCards: BattleCard[] = []
  hazardCards: HazardCardInterface[] = []
  pirateCards: PirateCardRemote[] = []
  robinsonCards: BattleCard[] = []

  constructor(difficulty: GameDifficulty, remote: RemoteCardSet) {
    const [ normalAgingCardDeck, hardAgingCardDeck ] = createAgingCardDecks(remote.agingCards, remote.battleDatas, difficulty)
    this.agingCards = [ ...shuffle(normalAgingCardDeck), ...shuffle(hardAgingCardDeck) ]

    const hazardCardDeck = createHazardCardDeck(remote.hazardCards, remote.battleDatas, remote.hazards)
    this.hazardCards = shuffle(hazardCardDeck)

    const pirateCardDeck = createPirateCardDeck(remote.pirateCards)
    this.pirateCards = shuffle(pirateCardDeck).slice(-2)

    let robinsonCardDeck = createRobinsonCardDeck(remote.robinsonCards, remote.battleDatas)
    if (difficulty > GameDifficulty.LEVEL_1) {
      const [ firstAgingCard, ...otherAgingCards ] = this.agingCards
      robinsonCardDeck = [ firstAgingCard, ...robinsonCardDeck ]
      this.agingCards = otherAgingCards
    }
    this.robinsonCards = shuffle(robinsonCardDeck)
  }
}
