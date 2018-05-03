
import { GameId, GameDifficulty } from '../../models/friday-game.model'
import { GameRound, Battle, CardPiles } from '../../models/friday-game-details.model'

import * as fromActiveGame from '../actions/active-game.actions'

export interface State {
  id: GameId
  difficulty: GameDifficulty
  playing: boolean

  battle: Battle
  currentRound: GameRound
  lives: number
  piles: CardPiles
}

const initialState: State = {
  difficulty: null,
  id: null,
  playing: false,

  battle: null,
  currentRound: null,
  lives: null,
  piles: null,

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
      const piles = {
        ...state.piles,
        agingCardPile: deck.agingCards,
        hazardCardPile: deck.hazardCards,
        pirateCards: deck.pirateCards,
        robinsonCardPile: deck.robinsonCards,
      }

      return {
        ...state,
        currentRound: GameRound.ONE,
        piles,
      }
    }

    case fromActiveGame.PLAY: {
      return {
        ...state,
        playing: true,
      }
    }

    case fromActiveGame.SET_ACTIVE_GAME: {
      const payload = action.payload

      let overrides
      overrides = {
        currentRound: payload.currentRound,
        difficulty: payload.difficulty,
        id: payload.id,
      }

      if (payload.currentRound) {
        overrides = {
          ...overrides,
          battle: payload.battle,
          lives: payload.lives,
          piles: payload.piles,
        }
      }

      return {
        ...state,
        ...overrides,
      }
    }

    case fromActiveGame.RESET_ACTIVE_GAME_STATE: {
      return initialState
    }

    default:
      return state
  }
}


export const getCurrentRound = (state: State) => state.currentRound
export const getDifficulty = (state: State) => state.difficulty
export const getId = (state: State) => state.id
