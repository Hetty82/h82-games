import { RouterStateSnapshot, Params } from '@angular/router'
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store'
import { storeFreeze } from 'ngrx-store-freeze'

import { environment } from '../../../environments/environment'

import * as fromRouter from '@ngrx/router-store'
import * as fromGames from '../../core/store/reducers/games'
import * as fromUser from '../../core/store/reducers/user'


export interface State {
  games: fromGames.State
  router: fromRouter.RouterReducerState<RouterStateUrl>
  user: fromUser.State
}

export const reducers: ActionReducerMap<State> = {
  games: fromGames.reducer,
  router: fromRouter.routerReducer,
  user: fromUser.reducer,
}

// MetaReducers

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    // console.log('state', state)
    console.log('action', action)

    return reducer(state, action)
  }
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger, storeFreeze] : []


// Router utils

export interface RouterStateUrl {
  url: string
  params: Params
  queryParams: Params
}

export class CustomRouterStateSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root

    while (route.firstChild)
      route = route.firstChild

    const { url, root: { queryParams } } = routerState
    const { params } = route

    return { url, params, queryParams }
  }
}
