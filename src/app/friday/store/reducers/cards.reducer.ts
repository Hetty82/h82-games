import {
  AgingCardDifficulty, AgingCardId, AgingCardRemote,
  BattleCardName, BattleCombo,
  HazardCardId, HazardCardRemote, HazardCombo,
  PirateCardId, PirateCardRemote,
  RobinsonCardId, RobinsonCardRemote,
} from '../../models/card.interfaces'

import { OuterGameActionsUnion, OuterGameActionTypes } from '../actions/outer-game.actions'

import { createEntities, createIdsArray } from '../../helpers/reducer.helper'


export interface BattleComboEntities  {
  [id: number]: BattleCombo
}
export interface HazardComboEntities  {
  [id: number]: HazardCombo
}

export interface AgingCardEntities  {
  [id: number]: AgingCardRemote
}
export interface HazardCardEntities  {
  [id: number]: HazardCardRemote
}
export interface PirateCardEntities  {
  [id: number]: PirateCardRemote
}
export interface RobinsonCardEntities  {
  [id: number]: RobinsonCardRemote
}

export interface State {
  loaded: boolean
  loading: boolean

  // Special cards
  veryStupidAgingCardId: AgingCardId,

  // Entities
  battleComboEntities: BattleComboEntities
  hazardComboEntities: HazardComboEntities

  agingCardEntities: AgingCardEntities
  hazardCardEntities: HazardCardEntities
  pirateCardEntities: PirateCardEntities
  robinsonCardEntities: RobinsonCardEntities

  // Ids arrays
  hardAgingCardIds: AgingCardId[]
  normalAgingCardIds: AgingCardId[]
  hazardCardIds: HazardCardId[]
  pirateCardIds: PirateCardId[]
  robinsonCardIds: RobinsonCardId[]
}

const initialState: State = {
  loaded: false,
  loading: false,

  // Special cards
  veryStupidAgingCardId: null,

  // Entities
  battleComboEntities: {},
  hazardComboEntities: {},

  agingCardEntities: {},
  hazardCardEntities: {},
  pirateCardEntities: {},
  robinsonCardEntities: {},

  // Ids arrays
  hardAgingCardIds: [],
  normalAgingCardIds: [],

  hazardCardIds: [],
  pirateCardIds: [],
  robinsonCardIds: [],
}

export function reducer(state: State = initialState, action: OuterGameActionsUnion): State {
  switch (action.type) {

    case OuterGameActionTypes.LOAD_CARDS: {
      return {
        ...state,
        loading: true,
      }
    }

    case OuterGameActionTypes.LOAD_CARDS_SUCCESS: {
      const cards = action.payload

      const agingCardsHard = cards.agingCards.filter(card => card.difficulty === AgingCardDifficulty.HARD)
      const agingCardsNormal = cards.agingCards.filter(card => card.difficulty === AgingCardDifficulty.NORMAL)

      const veryStupidBattleComboId = cards.battleCombos.find(combo => combo.name === BattleCardName.VERY_STUPID).id
      const veryStupidAgingCardId = cards.agingCards.find(card => card.battleComboId === veryStupidBattleComboId).id

      return {
        ...state,
        loaded: true,
        loading: false,

        veryStupidAgingCardId,

        battleComboEntities: createEntities(cards.battleCombos),
        hazardComboEntities: createEntities(cards.hazardCombos),

        agingCardEntities: createEntities(cards.agingCards),
        hazardCardEntities: createEntities(cards.hazardCards),
        pirateCardEntities: createEntities(cards.pirateCards),
        robinsonCardEntities: createEntities(cards.robinsonCards),

        hardAgingCardIds: createIdsArray(agingCardsHard),
        normalAgingCardIds: createIdsArray(agingCardsNormal),

        hazardCardIds: createIdsArray(cards.hazardCards),
        pirateCardIds: cards.pirateCards.map(card => card.id),
        robinsonCardIds: createIdsArray(cards.robinsonCards),
      }
    }

    case OuterGameActionTypes.RESET_CARDS_STATE: {
      return initialState
    }

    default:
      return state
  }
}

export const getLoaded = (state: State) => state.loaded
export const getLoading = (state: State) => state.loading

// Special cards
export const getVeryStupidAgingCardId = (state: State) => state.veryStupidAgingCardId

// Entities
export const getBattleComboEntities = (state: State) => state.battleComboEntities
export const getHazardComboEntities = (state: State) => state.hazardComboEntities

export const getAgingCardEntities = (state: State) => state.agingCardEntities
export const getHazardCardEntities = (state: State) => state.hazardCardEntities
export const getRobinsonCardEntities = (state: State) => state.robinsonCardEntities
export const getPirateCardEntities = (state: State) => state.pirateCardEntities

// Ids arrays
export const getAgingCardHardIds = (state: State) => state.hardAgingCardIds
export const getAgingCardNormalIds = (state: State) => state.normalAgingCardIds
export const getHazardCardIds = (state: State) => state.hazardCardIds
export const getPirateIds = (state: State) => state.pirateCardIds
export const getRobinsonCardIds = (state: State) => state.robinsonCardIds
