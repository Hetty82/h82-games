import { createSelector } from '@ngrx/store'

import * as fromFeature from '../reducers'
import * as fromRoot from '../../../store'
import * as fromActiveGame from '../reducers/active-game.reducer'

import { GameDifficulty } from '../../models/game.interfaces'


// fromRoot selectors
export const getRouterGameId = createSelector(fromRoot.getRouterState, (router => {
  return router.state && router.state.params.gameId
}))

// fromFeature selector
export const getActiveGameState = createSelector(fromFeature.getFridayState, (state: fromFeature.State) => state.activeGame)

// State slice selectors

// General
export const getActiveGameDifficulty = createSelector(getActiveGameState, fromActiveGame.getDifficulty)
export const getActiveGameId = createSelector(getActiveGameState, fromActiveGame.getId)
export const getActiveGameLives = createSelector(getActiveGameState, fromActiveGame.getLives)
export const getActiveGameRound = createSelector(getActiveGameState, fromActiveGame.getCurrentRound)

// Status
export const getActiveGamePlaying = createSelector(getActiveGameState, fromActiveGame.getPlaying)

// Cards
export const getDestroyedCardIds = createSelector(getActiveGameState, fromActiveGame.getDestroyedCardIds)

export const getAgingCardDeck = createSelector(getActiveGameState, fromActiveGame.getAgingCardDeck)
export const getRobinsonCardDeck = createSelector(getActiveGameState, fromActiveGame.getRobinsonCardDeck)
export const getRobinsonDiscardPile = createSelector(getActiveGameState, fromActiveGame.getRobinsonDiscardPile)

export const getHazardCardOptions = createSelector(getActiveGameState, fromActiveGame.getHazardCardOptions)
export const getHazardCardDeck = createSelector(getActiveGameState, fromActiveGame.getHazardCardDeck)
export const getHazardDiscardPile = createSelector(getActiveGameState, fromActiveGame.getHazardDiscardPile)

export const getPirateCardIds = createSelector(getActiveGameState, fromActiveGame.getPirateCardIds)

// Battle
export const getPlayedFreeBattleComboIds = createSelector(getActiveGameState, fromActiveGame.getPlayedFreeBattleComboIds)
export const getPlayedHazardCardId = createSelector(getActiveGameState, fromActiveGame.getPlayedHazardCardId)
export const getPlayedPaidBattleComboIds = createSelector(getActiveGameState, fromActiveGame.getPlayedPaidBattleComboIds)

// Derived state selectors
export const getActiveGameMaxLives = createSelector(getActiveGameDifficulty, (difficulty): number => {
  return difficulty === GameDifficulty.LEVEL_4 ? 20 : 22
})
