import { createSelector } from '@ngrx/store'

import * as fromFeature from '../reducers'
import * as fromActiveGame from '../reducers/active-game.reducer'

import { GameDifficulty } from '../../models/friday-game.model'


export const getActiveGameState = createSelector(fromFeature.getFridayState, (state: fromFeature.State) => state.activeGame)

export const getActiveGameDifficulty = createSelector(getActiveGameState, fromActiveGame.getDifficulty)
export const getActiveGameId = createSelector(getActiveGameState, fromActiveGame.getId)
export const getActiveGameRound = createSelector(getActiveGameState, fromActiveGame.getCurrentRound)

export const getActiveGameMaxLives = createSelector(getActiveGameDifficulty, (difficulty) => {
  return difficulty === GameDifficulty.LEVEL_4 ? 20 : 22
})
