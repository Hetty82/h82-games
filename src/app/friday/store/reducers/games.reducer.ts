import { FridayGame } from '../../models/friday-game.model'

import * as fromGames from '../actions/games.actions'


interface GameEntities  {
  [id: number]: FridayGame
}

export interface State {
  entities: GameEntities
  error: fromGames.GameError
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

export function reducer(state: State = initialState, action: fromGames.GamesAction): State {
  switch (action.type) {
    case fromGames.CREATE_GAME: {
      return {
        ...state,
        loading: true,
      }
    }

    case fromGames.CREATE_GAME_FAIL: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    }

    case fromGames.CREATE_GAME_SUCCESS: {
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

    case fromGames.DELETE_GAME: {
      return {
        ...state,
        loading: true,
      }
    }

    case fromGames.DELETE_GAME_FAIL: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    }

    case fromGames.DELETE_GAME_SUCCESS: {
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

    case fromGames.LOAD_GAMES: {
      return {
        ...state,
        loading: true,
      }
    }

    case fromGames.LOAD_GAMES_FAIL: {
      return {
        ...state,
        error: action.payload,
        loading: false,
        loaded: false,
      }
    }

    case fromGames.LOAD_GAMES_SUCCESS: {
      const games = action.payload

      const entities = games.reduce((newEntities: GameEntities, game: FridayGame) => {
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
        loading: false,
        loaded: true,
      }
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
