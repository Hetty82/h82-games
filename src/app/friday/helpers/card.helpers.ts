
import { State as CardsState } from '../store/reducers/cards.reducer'

import { Deck } from '../models/card.interfaces'
import { GameDifficulty } from '../models/game.interfaces'


export function shuffle<T>(array: T[]): T[] {
  if (!Array.isArray(array)) throw new TypeError(`Expected an Array, got ${typeof array} instead.`)

  if (array.length <= 1) return array

  const oldArray = [ ...array ]
  let newArray = new Array<T>()

  while (oldArray.length) {
    const i = Math.floor(Math.random() * oldArray.length)
    newArray = newArray.concat(oldArray.splice(i, 1))
  }

  return newArray
}

export function createDeck(difficulty: GameDifficulty, cardsState: CardsState): Deck {
  // Init aging cards
  let normalAgingCardIds = cardsState.normalAgingCardIds
  if ( [ GameDifficulty.LEVEL_1, GameDifficulty.LEVEL_2 ].includes(difficulty) ) {
    normalAgingCardIds = normalAgingCardIds.filter(id => id !== cardsState.veryStupidAgingCardId)
  }
  const hardAgingCardDeck = cardsState.hardAgingCardIds.map(id => cardsState.agingCardEntities[id].battleComboId)
  const normalAgingCardDeck = normalAgingCardIds.map(id => cardsState.agingCardEntities[id].battleComboId)
  let agingCardDeck = [
    ...shuffle(normalAgingCardDeck),
    ...shuffle(hardAgingCardDeck),
  ]

  // Init robinson cards
  let robinsonCardDeck = cardsState.robinsonCardIds.map(id => cardsState.robinsonCardEntities[id].battleComboId)
  if (difficulty > GameDifficulty.LEVEL_1) {
    const [ firstAgingCard, ...otherAgingCards ] = agingCardDeck
    robinsonCardDeck = [ firstAgingCard, ...robinsonCardDeck ]
    agingCardDeck = otherAgingCards
  }
  robinsonCardDeck = shuffle(robinsonCardDeck)

  // Init hazard cards
  const hazardCardDeck = shuffle(cardsState.hazardCardIds)

  // Init pirate cards
  const pirateCardIds = shuffle(cardsState.pirateCardIds).slice(-2)

  return { agingCardDeck, hazardCardDeck, pirateCardIds, robinsonCardDeck }
}
