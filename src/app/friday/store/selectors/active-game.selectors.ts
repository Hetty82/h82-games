import { createSelector } from '@ngrx/store'

import * as fromFeature from '../reducers'
import * as fromActiveGame from '../reducers/active-game.reducer'


export const getActiveGameState = createSelector(fromFeature.getFridayState, (state: fromFeature.State) => state.activeGame)

export const getActiveGameDetails = createSelector(getActiveGameState, fromActiveGame.getDetails)
export const getActiveGameId = createSelector(getActiveGameState, fromActiveGame.getId)
