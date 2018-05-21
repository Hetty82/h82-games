
import { GameDifficulty, GameId, GameRound } from '../../models/game.interfaces'
import { BattleComboId, HazardCardId, PirateCardId } from '../../models/card.interfaces'

import {
  GamesActionsUnion, GamesActionTypes,
  InnerGameActionsUnion, InnerGameActionTypes,
  OuterGameActionsUnion, OuterGameActionTypes,
} from '../actions'

export interface State {
  currentRound: GameRound
  difficulty: GameDifficulty
  id: GameId
  lives: number

  // Status
  destroying: boolean
  playing: boolean
  shuffling: boolean

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
  playedFreeBattleCardIds: BattleComboId[]
  playedHazardCardId: HazardCardId
  playedPaidBattleCardIds: BattleComboId[]
  selectedForDestructionIds: BattleComboId[]
}

const initialState: State = {
  currentRound: null,
  difficulty: null,
  id: null,
  lives: null,

  // Status
  destroying: false,
  playing: false,
  shuffling: false,

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
  playedFreeBattleCardIds: [],
  playedHazardCardId: null,
  playedPaidBattleCardIds: [],
  selectedForDestructionIds: [],
}

type GameAction = GamesActionsUnion | InnerGameActionsUnion | OuterGameActionsUnion

export function reducer(state: State = initialState, action: GameAction): State {
  switch (action.type) {

    case GamesActionTypes.LOAD_GAME_DETAILS_SUCCESS: {
      const gameDetails = action.payload

      return {
        ...state,
        ...gameDetails,
        lives: gameDetails.currentRound ? gameDetails.lives : state.lives,
      }
    }

    // Inner game actions
    case InnerGameActionTypes.INIT_GAME: {
      const lives = action.payload === GameDifficulty.LEVEL_4 ? 18 : 20

      return {
        ...state,
        lives,
      }
    }

    case InnerGameActionTypes.INIT_GAME_SUCCESS: {
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

    case InnerGameActionTypes.DRAW_HAZARDS: {
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

    case InnerGameActionTypes.PLAY_HAZARD: {
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

    case InnerGameActionTypes.PLAY_FREE_BATTLE_CARD: {
      const [ playedId, ...robinsonCardDeck ] = state.robinsonCardDeck

      return {
        ...state,
        playedFreeBattleCardIds: [ ...state.playedFreeBattleCardIds, playedId ],
        robinsonCardDeck,
      }
    }

    case InnerGameActionTypes.PLAY_PAID_BATTLE_CARD: {
      const [ playedId, ...robinsonCardDeck ] = state.robinsonCardDeck

      return {
        ...state,
        lives: state.lives - 1,
        playedPaidBattleCardIds: [ ...state.playedPaidBattleCardIds, playedId ],
        robinsonCardDeck,
      }
    }

    case InnerGameActionTypes.SHUFFLE_BATTLE_CARDS: {
      return {
        ...state,
        shuffling: true,
      }
    }

    case InnerGameActionTypes.SHUFFLE_BATTLE_CARDS_SUCCESS: {
      return {
        ...state,
        robinsonCardDeck: action.payload,
        robinsonDiscardPile: [],
        shuffling: false,
      }
    }

    case InnerGameActionTypes.LOSE_BATTLE: {
      return {
        ...state,
        destroying: true,
      }
    }

    case InnerGameActionTypes.LOSE_BATTLE_CANCEL: {
      return {
        ...state,
        destroying: false,
        selectedForDestructionIds: [],
      }
    }

    case InnerGameActionTypes.LOSE_BATTLE_CONFIRM: {
      let played = [
        ...state.playedFreeBattleCardIds,
        ...state.playedPaidBattleCardIds,
      ]

      state.selectedForDestructionIds.forEach(id => {
        const index = played.indexOf(id)
        played = [
          ...played.slice(0, index),
          ...played.slice(index + 1),
        ]
      })

      return {
        ...state,
        destroyedCardIds: [ ...state.selectedForDestructionIds, ...state.destroyedCardIds ],
        destroying: false,
        hazardDiscardPile: [ state.playedHazardCardId, ...state.hazardDiscardPile ],
        lives: state.lives - action.payload,
        playedFreeBattleCardIds: [],
        playedHazardCardId: null,
        playedPaidBattleCardIds: [],
        robinsonDiscardPile: [ ...played, ...state.robinsonDiscardPile ],
        selectedForDestructionIds: [],
      }
    }

    case InnerGameActionTypes.SELECT_FOR_DESTRUCTION: {
      return {
        ...state,
        selectedForDestructionIds: [ action.payload, ...state.selectedForDestructionIds ],
      }
    }

    case InnerGameActionTypes.DESELECT_FOR_DESTRUCTION: {
      const index = state.selectedForDestructionIds.indexOf(action.payload)
      const selectedForDestructionIds = [
        ...state.selectedForDestructionIds.slice(0, index),
        ...state.selectedForDestructionIds.slice(index + 1),
      ]

      return {
        ...state,
        selectedForDestructionIds,
      }
    }

    case InnerGameActionTypes.WIN_BATTLE: {
      const robinsonDiscardPile = [
        action.payload,
        ...state.playedFreeBattleCardIds,
        ...state.playedPaidBattleCardIds,
        ...state.robinsonDiscardPile,
      ]

      return {
        ...state,
        playedFreeBattleCardIds: [],
        playedHazardCardId: null,
        playedPaidBattleCardIds: [],
        robinsonDiscardPile,
      }
    }

    // Outer game actions
    case OuterGameActionTypes.PLAY: {
      return {
        ...state,
        playing: true,
      }
    }

    case OuterGameActionTypes.RESET_ACTIVE_GAME: {
      return initialState
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
export const getDestroying = (state: State) => state.destroying
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
export const getPlayedFreeBattleComboIds = (state: State) => state.playedFreeBattleCardIds
export const getPlayedHazardCardId = (state: State) => state.playedHazardCardId
export const getPlayedPaidBattleComboIds = (state: State) => state.playedPaidBattleCardIds
export const getSelectedForDestructionIds = (state: State) => state.selectedForDestructionIds
