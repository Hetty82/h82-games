import { createSelector } from '@ngrx/store'
import { HazardCombo, BattleCombo, HazardPointsType } from '../../models/card.interfaces'

import * as fromActiveGame from './active-game.selectors'
import * as fromCards from './cards.selectors'

import { InnerGameActionTypes } from '../actions/inner-game.actions'
import { GameRound } from '../../models/game.interfaces'


export const getActiveBattleHazardCombo = createSelector(
  fromActiveGame.getPlayedHazardCardId, fromCards.getHazardCardEntities, fromCards.getHazardComboEntities,
  (cardId, cardEntities, comboEntities): HazardCombo => {

    const card = cardEntities[cardId]

    return card && comboEntities[card.hazardComboId]
  },
)

// For now make em small. Later maybe merge unused steps
// todo: move to other files if they are not really combined
export const getActiveBattleFreeBattleCombos = createSelector(
  fromActiveGame.getPlayedFreeBattleComboIds, fromCards.getBattleComboEntities,
  (ids, entities): BattleCombo[] => ids.map(id => entities[id]),
)

export const getActiveBattlePaidBattleCombos = createSelector(
  fromActiveGame.getPlayedPaidBattleComboIds, fromCards.getBattleComboEntities,
  (ids, entities): BattleCombo[] => ids.map(id => entities[id]),
)

export const getActiveBattlePlayedCombos = createSelector(
  getActiveBattleFreeBattleCombos, getActiveBattlePaidBattleCombos, (free, paid) => [ ...free, ...paid ],
)

export const getActiveBattlePoints = createSelector(
  getActiveBattlePlayedCombos, combos => combos.reduce((total, combo) => total + combo.battlePoints, 0),
)

export const getActiveBattleHazardPoints = createSelector(
  getActiveBattleHazardCombo,
  fromActiveGame.getActiveGameRound,
  (hazard, round) => {
    if (hazard) {
      const pointsType: HazardPointsType = hazard.hazardPoints
      if (pointsType === HazardPointsType.P_0_1_3) {
        return round === GameRound.ONE ? 0 : round === GameRound.TWO ? 1 : round === GameRound.THREE ? 3 : null
      }
      if (pointsType === HazardPointsType.P_1_3_6) {
        return round === GameRound.ONE ? 1 : round === GameRound.TWO ? 3 : round === GameRound.THREE ? 6 : null
      }
      if (pointsType === HazardPointsType.P_2_5_8) {
        return round === GameRound.ONE ? 2 : round === GameRound.TWO ? 5 : round === GameRound.THREE ? 8 : null
      }
      if (pointsType === HazardPointsType.P_4_7_11) {
        return round === GameRound.ONE ? 4 : round === GameRound.TWO ? 7 : round === GameRound.THREE ? 11 : null
      }
      if (pointsType === HazardPointsType.P_5_9_14) {
        return round === GameRound.ONE ? 5 : round === GameRound.TWO ? 9 : round === GameRound.THREE ? 14 : null
      }
    }
  },
)

export const getActiveBattleRequiredPoints = createSelector(
  getActiveBattleHazardPoints,
  getActiveBattlePoints,
  (hazardPoints, battlePoints) => hazardPoints && hazardPoints - battlePoints,
)

export const getRemainingFreeCardsAmount = createSelector(
  getActiveBattleHazardCombo,
  fromActiveGame.getPlayedFreeBattleComboIds,
  (hazard, cards) => hazard && hazard.freeCardAmount - cards.length,
)

export const getSelectedDestroyCost = createSelector(
  fromCards.getBattleComboEntities,
  fromActiveGame.getSelectedForDestructionIds,
  (entities, ids) => entities && ids.reduce((total, id) => total + (entities[id].isAgingCard ? 2 : 1), 0),
)


export const getAvailableHazardActions = createSelector(fromActiveGame.getActiveGameState, (game): string[] => {
  if (game && !game.playedHazardCardId) {
    if (!game.hazardCardOptions.length) {
      return [ InnerGameActionTypes.DRAW_HAZARDS ]
    } else if (game.hazardCardOptions.length > 1) {
      return [ InnerGameActionTypes.PLAY_HAZARD ]
    } else if (game.hazardCardOptions.length === 1) {
      return [ InnerGameActionTypes.PLAY_HAZARD, InnerGameActionTypes.DISCARD_HAZARD ]
    }
  }

  return []
})

export const getAvailableBattleActions = createSelector(
  fromActiveGame.getActiveGameState,
  getActiveBattleHazardCombo,
  getActiveBattleRequiredPoints,
  getActiveBattleFreeBattleCombos,
  getActiveBattlePaidBattleCombos,
  (game, playedHazard, points, freeCombos, paidBattelCombos): string[] => {
    if (game && !game.destroying && playedHazard) {
      let actions = []

      if (game.robinsonCardDeck.length) {
        if (playedHazard.freeCardAmount > freeCombos.length) {
          actions = [ ...actions, InnerGameActionTypes.PLAY_FREE_BATTLE_CARD ]
        } else if (game.lives) {
          actions = [ ...actions, InnerGameActionTypes.PLAY_PAID_BATTLE_CARD ]
        }
      } else if (game.robinsonDiscardPile.length) {
        actions = [ ...actions, InnerGameActionTypes.SHUFFLE_BATTLE_CARDS ]
      }

      if (freeCombos.length) {
        if (points <= 0) {
          actions = [ ...actions, InnerGameActionTypes.WIN_BATTLE ]
        } else {
          actions = [ ...actions, InnerGameActionTypes.LOSE_BATTLE ]
        }
      }

      return actions
    }

    return []
  },
)

export const getAvailableLoseActions = createSelector(
  fromActiveGame.getActiveGameState,
  getActiveBattleRequiredPoints,
  getSelectedDestroyCost,
  (game, points, destroyCost): string[] => {
    if (game && game.destroying) {
      let actions = [
        InnerGameActionTypes.LOSE_BATTLE_CANCEL,
        InnerGameActionTypes.DESELECT_FOR_DESTRUCTION,
        InnerGameActionTypes.SELECT_FOR_DESTRUCTION,
      ]
      if (destroyCost <= points) {
        actions = [  ...actions, InnerGameActionTypes.LOSE_BATTLE_CONFIRM ]
      }

      return actions
    }

    return []
  },
)

export const getAvailableActions = createSelector(
  getAvailableHazardActions,
  getAvailableBattleActions,
  getAvailableLoseActions,
  (actions1, actions2, actions3): string[] => [ ...actions1, ...actions2, ...actions3 ],
)
