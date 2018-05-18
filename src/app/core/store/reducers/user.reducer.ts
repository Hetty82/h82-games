import { User } from '../../models/user.interface'

import { UserActionsUnion, UserActionTypes } from '../actions/user.actions'

interface UserEntities  {
  [id: number]: User
}

export interface State {
  currentUserId: number
  entities: UserEntities
  ids: number[]
  loaded: boolean
  loading: boolean
}

const initialState: State = {
  currentUserId: null,
  entities: {},
  ids: [],
  loaded: false,
  loading: false,
}

export function reducer(state: State = initialState, action: UserActionsUnion): State {
  switch (action.type) {
    case UserActionTypes.LOAD_USERS: {
      return {
        ...state,
        loading: true,
      }
    }

    case UserActionTypes.LOAD_USERS_SUCCESS: {
      const users = action.payload

      const entities = users.reduce((newEntities: UserEntities, user: User) => {
          return {
            ...newEntities,
            [user.id]: user,
          }
        }, { ...state.entities },
      )

      const ids = users.map(user => user.id)

      return {
        ...state,
        entities,
        ids,
        loaded: true,
        loading: false,
      }
    }

    case UserActionTypes.LOAD_USERS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
      }
    }

    case UserActionTypes.SELECT_USER: {
      return {
        ...state,
        currentUserId: action.payload,
      }
    }

    case UserActionTypes.DESELECT_USER: {
      return {
        ...state,
        currentUserId: null,
      }
    }

    default:
      return state
  }
}

export const getCurrentUserId = (state: State) => state.currentUserId
export const getEntities = (state: State) => state.entities
export const getIds = (state: State) => state.ids
export const getLoaded = (state: State) => state.loaded
export const getLoading = (state: State) => state.loading
