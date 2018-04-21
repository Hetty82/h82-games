import { createSelector } from '@ngrx/store'

import * as fromFeature from '../reducers'
import * as fromActiveGame from '../reducers/active-game.reducer'


export const getActiveGameState = createSelector(fromFeature.getFridayState, (state: fromFeature.State) => state.activeGame)

export const getCurrentRound = createSelector(getActiveGameState, fromActiveGame.getCurrentRound)
