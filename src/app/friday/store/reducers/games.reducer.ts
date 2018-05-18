import { Game } from '../../models/game.model'
import { GameError } from '../../models/game.interfaces'

import { GamesActionsUnion, GamesActionTypes } from '../actions/games.actions'


interface GameEntities  {
  [id: number]: Game
}

export interface State {
  entities: GameEntities
  error: GameError
  ids: number[]
  loaded: boolean
  loading: boolean
}

const initialState: State = {
  entities: {},
  error: null,
  ids: [],
  loaded: false,
  loading: false,
}

export function reducer(state: State = initialState, action: GamesActionsUnion): State {
  switch (action.type) {
    case GamesActionTypes.CREATE_GAME: {
      return {
        ...state,
        loading: true,
      }
    }

    case GamesActionTypes.CREATE_GAME_FAIL: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    }

    case GamesActionTypes.CREATE_GAME_SUCCESS: {
      const game = action.payload

      const entities = {
        ...state.entities,
        [game.id]: game,
      }

      const ids = [
        ...state.ids,
        game.id,
      ]

      return {
        ...state,
        entities,
        error: null,
        ids,
        loading: false,
      }
    }

    case GamesActionTypes.DELETE_GAME: {
      return {
        ...state,
        loading: true,
      }
    }

    case GamesActionTypes.DELETE_GAME_FAIL: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    }

    case GamesActionTypes.DELETE_GAME_SUCCESS: {
      const gameId = action.payload

      const {
        [gameId]: deleted,
        ...entities,
      } = state.entities

      const ids = state.ids.filter(id => id !== gameId)

      return {
        ...state,
        entities,
        error: null,
        ids,
        loading: false,
      }
    }

    case GamesActionTypes.LOAD_GAMES: {
      return {
        ...state,
        loading: true,
      }
    }

    case GamesActionTypes.LOAD_GAMES_FAIL: {
      return {
        ...state,
        error: action.payload,
        loaded: false,
        loading: false,
      }
    }

    case GamesActionTypes.LOAD_GAMES_SUCCESS: {
      const games = action.payload

      const entities = games.reduce((newEntities: GameEntities, game: Game) => {
          return {
            ...newEntities,
            [game.id]: game,
          }
        }, { ...state.entities },
      )

      const ids = games.map(game => game.id)

      return {
        ...state,
        entities,
        error: null,
        ids,
        loaded: true,
        loading: false,
      }
    }


    case GamesActionTypes.LOAD_GAME_DETAILS: {
      return {
        ...state,
        loading: true,
      }
    }

    case GamesActionTypes.LOAD_GAME_DETAILS_FAIL: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    }

    case GamesActionTypes.LOAD_GAME_DETAILS_SUCCESS: {
      return {
        ...state,
        error: null,
        loading: false,
      }
    }

    case GamesActionTypes.RESET_GAMES_STATE: {
      return initialState
    }

    default:
      return state
  }
}


export const getEntities = (state: State) => state.entities
export const getError = (state: State) => state.error
export const getIds = (state: State) => state.ids
export const getLoaded = (state: State) => state.loaded
export const getLoading = (state: State) => state.loading
