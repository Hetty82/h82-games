import { createSelector } from '@ngrx/store'

import * as fromFeature from '../reducers'
import * as fromGames from '../reducers/games'


export const getGamesState = createSelector(fromFeature.getFridayState, (state: fromFeature.State) => state.games)

export const getGameEntities = createSelector(getGamesState, fromGames.getEntities)
export const getGameIds = createSelector(getGamesState, fromGames.getIds)
export const getGamesLoaded = createSelector(getGamesState, fromGames.getLoaded)
export const getGamesLoading = createSelector(getGamesState, fromGames.getLoading)

export const getGames = createSelector(getGameEntities, getGameIds, (entities, ids) => {
  return ids.map(id => entities[id])
})
