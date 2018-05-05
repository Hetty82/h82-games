
import { GameDifficulty, GameId, GameRound } from '../../models/game.interfaces'
import { BattleComboId, HazardCardId, PirateCardId } from '../../models/card.interfaces'

import * as fromActions from '../actions'

export interface State {
  currentRound: GameRound
  difficulty: GameDifficulty
  id: GameId
  lives: number

  // Status
  playing: boolean

  // Cards
  destroyedCardIds: BattleComboId[]

  agingCardDeck: BattleComboId[]
  robinsonCardDeck: BattleComboId[]
  robinsonDiscardPile: BattleComboId[]

  hazardCardDeck: HazardCardId[]
  hazardCardOptions: HazardCardId[]
  hazardDiscardPile: HazardCardId[]

  pirateCardIds: PirateCardId[]

  // Battle
  playedHazardCardId: HazardCardId
}

const initialState: State = {
  currentRound: null,
  difficulty: null,
  id: null,
  lives: null,

  // Status
  playing: false,

  // Cards
  destroyedCardIds: [],

  agingCardDeck: [],
  robinsonCardDeck: [],
  robinsonDiscardPile: [],

  hazardCardDeck: [],
  hazardCardOptions: [],
  hazardDiscardPile: [],

  pirateCardIds: [],

  // Battle
  playedHazardCardId: null,
}

type GameAction = fromActions.GamesAction | fromActions.InnerGameAction | fromActions.OuterGameAction

export function reducer(state: State = initialState, action: GameAction): State {
  switch (action.type) {

    case fromActions.INIT_GAME: {
      const lives = action.payload === GameDifficulty.LEVEL_4 ? 18 : 20

      return {
        ...state,
        lives,
      }
    }

    case fromActions.INIT_GAME_SUCCESS: {
      const deck = action.payload

      return {
        ...state,
        currentRound: GameRound.ONE,

        agingCardDeck: deck.agingCardDeck,
        hazardCardDeck: deck.hazardCardDeck,
        pirateCardIds: deck.pirateCardIds,
        robinsonCardDeck: deck.robinsonCardDeck,
      }
    }

    case fromActions.LOAD_GAME_DETAILS_SUCCESS: {
      const gameDetails = action.payload

      return {
        ...state,
        ...gameDetails,
        lives: gameDetails.currentRound ? gameDetails.lives : state.lives,
      }
    }

    case fromActions.PLAY: {
      return {
        ...state,
        playing: true,
      }
    }

    case fromActions.RESET_ACTIVE_GAME: {
      return initialState
    }

    // in game actions
    case fromActions.DRAW_HAZARDS: {
      let newHazardCardDeck: HazardCardId[]
      let option1: HazardCardId
      let option2: HazardCardId

      if (state.hazardCardDeck.length >= 2) {
        [ option1, option2, ...newHazardCardDeck ] = state.hazardCardDeck
      }
      if (state.hazardCardDeck.length === 1) {
        [ option1, ...newHazardCardDeck ] = state.hazardCardDeck
      }
      if (state.hazardCardDeck.length === 0) {
        // do something dammit
      }

      const newHazardCardOptions = [ option1, option2 ].filter(option => !!option)

      return {
        ...state,
        hazardCardDeck: newHazardCardDeck,
        hazardCardOptions: newHazardCardOptions,
      }
    }

    case fromActions.PLAY_HAZARD: {
      const playedCardId = action.payload
      let newHazardDiscardPile: HazardCardId[]
      let discarded: HazardCardId

      if (state.hazardCardOptions.length === 2) {
        discarded = state.hazardCardOptions.find(id => id !== playedCardId)
        newHazardDiscardPile = [ discarded, ...state.hazardDiscardPile ]
      }

      return {
        ...state,
        hazardCardOptions: [],
        hazardDiscardPile: newHazardDiscardPile || state.hazardDiscardPile,
        playedHazardCardId: playedCardId,
      }
    }

    default:
      return state
  }
}

// General
export const getCurrentRound = (state: State) => state.currentRound
export const getDifficulty = (state: State) => state.difficulty
export const getId = (state: State) => state.id
export const getLives = (state: State) => state.lives

// Status
export const getPlaying = (state: State) => state.playing

// Cards
export const getDestroyedCardIds = (state: State) => state.destroyedCardIds

export const getAgingCardDeck = (state: State) => state.agingCardDeck
export const getRobinsonCardDeck = (state: State) => state.robinsonCardDeck
export const getRobinsonDiscardPile = (state: State) => state.robinsonDiscardPile

export const getHazardCardOptions = (state: State) => state.hazardCardOptions
export const getHazardCardDeck = (state: State) => state.hazardCardDeck
export const getHazardDiscardPile = (state: State) => state.hazardDiscardPile

export const getPirateCardIds = (state: State) => state.pirateCardIds

// Battle
export const getPlayedHazardCardId = (state: State) => state.playedHazardCardId
