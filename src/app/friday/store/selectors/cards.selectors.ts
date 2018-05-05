import { createSelector } from '@ngrx/store'

import * as fromFeature from '../reducers'
import * as fromCards from '../reducers/cards.reducer'

export const getCardsState = createSelector(fromFeature.getFridayState, (state: fromFeature.State) => state.cards)

export const getCardsLoaded = createSelector(getCardsState, fromCards.getLoaded)
export const getCardsLoading = createSelector(getCardsState, fromCards.getLoading)

export const getVeryStupidAgingCardId = createSelector(getCardsState, fromCards.getVeryStupidAgingCardId)

export const getBattleComboEntities = createSelector(getCardsState, fromCards.getBattleComboEntities)
export const getHazardComboEntities = createSelector(getCardsState, fromCards.getHazardComboEntities)

export const getAgingCardEntities = createSelector(getCardsState, fromCards.getAgingCardEntities)
export const getHazardCardEntities = createSelector(getCardsState, fromCards.getHazardCardEntities)
export const getPirateCardEntities = createSelector(getCardsState, fromCards.getPirateCardEntities)
export const getRobinsonCardEntities = createSelector(getCardsState, fromCards.getRobinsonCardEntities)
