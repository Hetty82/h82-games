
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

import * as fromActiveGame from './active-game'
import * as fromGames from './games'


export interface State {
  activeGame: fromActiveGame.State
  games: fromGames.State
}

export const reducers: ActionReducerMap<State> = {
  activeGame: fromActiveGame.reducer,
  games: fromGames.reducer,
}

export const getFridayState = createFeatureSelector<State>(
  'friday'
)
