
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

import * as fromActiveGame from './active-game.reducer'
import * as fromCards from './cards.reducer'
import * as fromGames from './games.reducer'


export interface State {
  activeGame: fromActiveGame.State
  cards: fromCards.State
  games: fromGames.State
}

export const reducers: ActionReducerMap<State> = {
  activeGame: fromActiveGame.reducer,
  cards: fromCards.reducer,
  games: fromGames.reducer,
}

export const getFridayState = createFeatureSelector<State>('friday')
