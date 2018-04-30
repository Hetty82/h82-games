
import { BattleCard } from '../../models/battle-card.model'
import { GameId, GameDifficulty } from '../../models/friday-game.model'
import { GameRound } from '../../models/friday-game-details.model'
import { HazardCardInterface, PirateCardRemote, Hazard } from '../../models/card.interfaces'

import * as fromActiveGame from '../actions/active-game.actions'


export interface State {
  currentRound: GameRound
  difficulty: GameDifficulty
  id: GameId
  lives: number

  activeBattlePoints: number
  activeFreeBattleCards: BattleCard[]
  activeHazard: Hazard
  activePayedBattleCards: BattleCard[]

  destroyedCards: BattleCard[]

  agingCardDeck: BattleCard[]
  hazardCardDeck: HazardCardInterface[]
  hazardCardDiscardPile: HazardCardInterface[]
  pirateCardDeck: PirateCardRemote[]
  robinsonCardDeck: BattleCard[]
  robinsonCardDiscardPile: BattleCard[]
}

const initialState: State = {
  currentRound: null,
  difficulty: null,
  id: null,
  lives: null,

  activeBattlePoints: 0,
  activeFreeBattleCards: [],
  activeHazard: null,
  activePayedBattleCards: [],

  destroyedCards: [],

  agingCardDeck: [],
  hazardCardDeck: [],
  hazardCardDiscardPile: [],
  pirateCardDeck: [],
  robinsonCardDeck: [],
  robinsonCardDiscardPile: [],
}

export function reducer(state: State = initialState, action: fromActiveGame.ActiveGameAction): State {
  switch (action.type) {

    case fromActiveGame.INIT_GAME: {
      const lives = action.payload === GameDifficulty.LEVEL_4 ? 18 : 20

      return {
        ...state,
        lives,
      }
    }

    case fromActiveGame.CREATE_DECK_SUCCESS: {
      const deck = action.payload

      return {
        ...state,
        agingCardDeck: deck.agingCards,
        currentRound: GameRound.GREEN,
        hazardCardDeck: deck.hazardCards,
        pirateCardDeck: deck.pirateCards,
        robinsonCardDeck: deck.robinsonCards,
      }
    }

    case fromActiveGame.SET_ACTIVE_GAME: {
      return {
        ...state,
        currentRound: action.payload.currentRound,
        difficulty: action.payload.difficulty,
        id: action.payload.id,
      }
    }

    case fromActiveGame.RESET_ACTIVE_GAME_STATE: {
      return initialState
    }

    default:
      return state
  }
}


export const getDifficulty = (state: State) => state.difficulty
export const getId = (state: State) => state.id
export const getCurrentRound = (state: State) => state.currentRound
