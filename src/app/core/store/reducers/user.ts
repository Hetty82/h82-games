import { createFeatureSelector } from '@ngrx/store'
import { User } from '../../interfaces/user.interface'

import * as fromUser from '../actions/user'

interface UserEntities  {
  [id: number]: User
}

export interface State {
  entities: UserEntities
  ids: number[]
  loaded: boolean
  loading: boolean
}

const initialState: State = {
  entities: { },
  ids: [],
  loaded: false,
  loading: false,
}

export function reducer(state: State = initialState, action: fromUser.UserAction): State {
  switch (action.type) {
    case fromUser.LOAD_USERS: {
      return {
        ...state,
        loading: true,
      }
    }

    case fromUser.LOAD_USERS_SUCCESS: {
      const users = action.payload

      const entities = users.reduce((newEntities: UserEntities, user: User) => {
          return {
            ...newEntities,
            [user.id]: user,
          }
        }, { ...state.entities }
      )

      const ids = users.map(user => user.id)

      return {
        ...state,
        entities,
        ids,
        loading: false,
        loaded: true,
      }
    }

    case fromUser.LOAD_USERS_FAIL: {
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
