import { createSelector } from '@ngrx/store'

import * as fromFeature from '../reducers'
import * as fromRoot from '../../../store'
import * as fromActiveGame from '../reducers/active-game.reducer'

import { GameDifficulty } from '../../models/friday-game.model'

// Root selectors
export const getActiveGameId = createSelector(fromRoot.getRouterState, (router => {
  return router.state && router.state.params.gameId
}))

// Feature selector
export const getActiveGameState = createSelector(fromFeature.getFridayState, (state: fromFeature.State) => state.activeGame)

// State slice selectors
export const getActiveGameDifficulty = createSelector(getActiveGameState, fromActiveGame.getDifficulty)
export const getActiveGameRound = createSelector(getActiveGameState, fromActiveGame.getCurrentRound)
export const getLoadedGameId = createSelector(getActiveGameState, fromActiveGame.getId)

// Derived state selectors
export const getActiveGameMaxLives = createSelector(getActiveGameDifficulty, (difficulty) => {
  return difficulty === GameDifficulty.LEVEL_4 ? 20 : 22
})
