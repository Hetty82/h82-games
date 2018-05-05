import { createSelector } from '@ngrx/store'

import * as fromFeature from '../reducers'
import * as fromRoot from '../../../store'
import * as fromActiveGame from '../reducers/active-game.reducer'
import * as fromInnerGameActions from '../actions/inner-game.actions'

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
export const getPlayedHazardCardId = createSelector(getActiveGameState, fromActiveGame.getPlayedHazardCardId)

// Derived state selectors
export const getActiveGameMaxLives = createSelector(getActiveGameDifficulty, (difficulty): number => {
  return difficulty === GameDifficulty.LEVEL_4 ? 20 : 22
})

export const getAvailableActions = createSelector(getActiveGameState, (game): string[] => {
  if (game) {
    if (!game.playing) {
      return []
    }

    if (game.hazardCardOptions.length > 1) {
      return [ fromInnerGameActions.PLAY_HAZARD ]
    } else if (game.hazardCardOptions.length === 1) {
      return [ fromInnerGameActions.PLAY_HAZARD, fromInnerGameActions.DISCARD_HAZARD ]
    }

    if (game.playedHazardCardId) {
      // if remaining free cards
      return [ fromInnerGameActions.DRAW_FREE_BATTLE_CARD, fromInnerGameActions.BUY_BATTLE_CARD ]
      // if no remaing free cards
      // if win
      // if lose
    } else {
      return [ fromInnerGameActions.DRAW_HAZARDS ]
    }
  }

  return []
})
