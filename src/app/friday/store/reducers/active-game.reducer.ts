
import { FridayGameDetails } from '../../models/friday-game-details.model'
import { GameId } from '../../models/friday-game.model'

import * as fromActiveGame from '../actions/active-game.actions'


export interface State {
  details: FridayGameDetails
  id: GameId
}

const initialState: State = {
  details: null,
  id: null,
}

export function reducer(state: State = initialState, action: fromActiveGame.ActiveGameAction): State {
  switch (action.type) {

    case fromActiveGame.SET_ACTIVE_GAME: {
      return {
        ...state,
        details: action.payload,
        id: action.payload.id,
      }
    }

    case fromActiveGame.REMOVE_ACTIVE_GAME: {
      return {
        ...state,
        details: null,
        id: null,
      }
    }

    case fromActiveGame.RESET_ACTIVE_GAME_STATE: {
      return initialState
    }

    default:
      return state
  }
}


export const getDetails = (state: State) => state.details
export const getId = (state: State) => state.id
