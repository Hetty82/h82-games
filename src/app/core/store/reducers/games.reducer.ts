import { Game } from '../../models/game.interface'

import * as fromGames from '../actions/games.actions'

interface GameEntities  {
  [id: number]: Game
}

export interface State {
  entities: GameEntities
  ids: number[]
  loaded: boolean
  loading: boolean
}

const initialState: State = {
  entities: {},
  ids: [],
  loaded: false,
  loading: false,
}

export function reducer(state: State = initialState, action: fromGames.GamesAction): State {
  switch (action.type) {
    case fromGames.LOAD_GAMES: {
      return {
        ...state,
        loading: true,
      }
    }

    case fromGames.LOAD_GAMES_SUCCESS: {
      const games = action.payload

      const entities = games.reduce((newEntities: GameEntities, game: Game) => {
          return {
            ...newEntities,
            [game.id]: game,
          }
        }, { ...state.entities }
      )

      const ids = games.map(game => game.id)

      return {
        ...state,
        entities,
        ids,
        loading: false,
        loaded: true,
      }
    }

    case fromGames.LOAD_GAMES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      }
    }

    default:
      return state
  }
}

export const getEntities = (state: State) => state.entities
export const getIds = (state: State) => state.ids
export const getLoaded = (state: State) => state.loaded
export const getLoading = (state: State) => state.loading
