import { HazardCombo, HazardPointsType, HazardCardName } from '../models/card.interfaces'

export const HAZARD_COMBOS: HazardCombo[] = [
  {
    freeCardAmount: 1,
    hazardPoints: HazardPointsType.P_0_1_3,
    id: 1,
    name: HazardCardName.WITH_THE_RAFT_TO_THE_WRECK,
  },
  {
    freeCardAmount: 2,
    hazardPoints: HazardPointsType.P_1_3_6,
    id: 2,
    name: HazardCardName.EXPLORING_THE_ISLAND,
  },
  {
    freeCardAmount: 3,
    hazardPoints: HazardPointsType.P_2_5_8,
    id: 3,
    name: HazardCardName.FURTHER_EXPLORING_THE_ISLAND,
  },
  {
    freeCardAmount: 4,
    hazardPoints: HazardPointsType.P_4_7_11,
    id: 4,
    name: HazardCardName.WILD_ANIMALS,
  },
  {
    freeCardAmount: 5,
    hazardPoints: HazardPointsType.P_5_9_14,
    id: 5,
    name: HazardCardName.CANNIBALS,
  },
]
