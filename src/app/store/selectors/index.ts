import { createFeatureSelector, createSelector } from '@ngrx/store'

import * as fromGames from '../../core/store/reducers/games'
import * as fromUser from '../../core/store/reducers/user'


// Game feature from CoreModule
export const getGamesState = createFeatureSelector<fromGames.State>('games')

export const getGameEntities = createSelector(getGamesState, fromGames.getEntities)
export const getGameIds = createSelector(getGamesState, fromGames.getIds)
export const getGamesLoaded = createSelector(getGamesState, fromGames.getLoaded)
export const getGamesLoading = createSelector(getGamesState, fromGames.getLoading)

export const getGames = createSelector(getGameEntities, getGameIds, (entities, ids) => {
  return ids.map(id => entities[id])
})

// User feature from CoreModule
export const getUserState = createFeatureSelector<fromUser.State>('user')

export const getCurrentUserId = createSelector(getUserState, fromUser.getCurrentUserId)
export const getUserEntities = createSelector(getUserState, fromUser.getEntities)
export const getUserIds = createSelector(getUserState, fromUser.getIds)
export const getUsersLoaded = createSelector(getUserState, fromUser.getLoaded)
export const getUsersLoading = createSelector(getUserState, fromUser.getLoading)

export const getUsers = createSelector(getUserEntities, getUserIds, (entities, ids) => {
  return ids.map(id => entities[id])
})

export const getCurrentUser = createSelector(getUserEntities, getCurrentUserId, (entities, id) => {
  return entities[id]
})

