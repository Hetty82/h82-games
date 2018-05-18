import { createSelector } from '@ngrx/store'
import { HazardCombo, BattleCombo } from '../../models/card.interfaces'

import * as fromActiveGame from './active-game.selectors'
import * as fromCards from './cards.selectors'
import * as fromInnerGameActions from '../actions/inner-game.actions'


export const getActiveBattleHazardCombo = createSelector(
  fromActiveGame.getPlayedHazardCardId, fromCards.getHazardCardEntities, fromCards.getHazardComboEntities,
  (cardId, cardEntities, comboEntities): HazardCombo => {

    const card = cardEntities[cardId]

    return card && comboEntities[card.hazardComboId]
  },
)

// For now make em small. Later maybe merge unused steps
export const getActiveBattleFreeBattleCombos = createSelector(
  fromActiveGame.getPlayedFreeBattleComboIds, fromCards.getBattleComboEntities,
  (ids, entities): BattleCombo[] => ids.map(id => entities[id]),
)

export const getActiveBattlePaidBattleCombos = createSelector(
  fromActiveGame.getPlayedPaidBattleComboIds, fromCards.getBattleComboEntities,
  (ids, entities): BattleCombo[] => ids.map(id => entities[id]),
)

export const getActiveBattlePlayedCombos = createSelector(
  getActiveBattleFreeBattleCombos, getActiveBattlePaidBattleCombos, (free, paid) => [...free, ...paid],
)

export const getActiveBattlePoints = createSelector(
  getActiveBattlePlayedCombos, combos => combos.reduce((prev, curr) => prev + curr.battlePoints , 0),
)

export const getAvailableHazardActions = createSelector(fromActiveGame.getActiveGameState, (game): string[] => {
  if (game && game.playing && !game.playedHazardCardId) {
    if (!game.hazardCardOptions.length) {
      return [ fromInnerGameActions.DRAW_HAZARDS ]
    } else if (game.hazardCardOptions.length > 1) {
      return [ fromInnerGameActions.PLAY_HAZARD ]
    } else if (game.hazardCardOptions.length === 1) {
      return [ fromInnerGameActions.PLAY_HAZARD, fromInnerGameActions.DISCARD_HAZARD ]
    }
  }

  return []
})

export const getAvailableBattleActions = createSelector(
  fromActiveGame.getActiveGameState,
  getActiveBattleHazardCombo,
  getActiveBattlePoints,
  getActiveBattleFreeBattleCombos,
  getActiveBattlePaidBattleCombos,
  (game, playedHazard, points, freeCombos, paidBattelCombos): string[] => {
  if (game && game.playing && playedHazard) {
      let actions = []

      if (playedHazard.freeCardAmount > freeCombos.length) {
        actions = [ ...actions, fromInnerGameActions.PLAY_FREE_BATTLE_CARD ]
      } else if (game.lives) {
        actions = [ ...actions, fromInnerGameActions.PLAY_PAID_BATTLE_CARD ]
      }

      if (points >= playedHazard.hazardPoints) {
        actions = [ ...actions, fromInnerGameActions.WIN_BATTLE]
      } else {
        actions = [ ...actions, fromInnerGameActions.LOSE_BATTLE]
      }

      return actions
    }

    return []
  },
)
export const getAvailableActions = createSelector(
  getAvailableHazardActions,
  getAvailableBattleActions,
  (actions1, actions2): string[] => [...actions1, ...actions2],
)
