import { Hazard, HazardPoints, HazardCardName } from '../models/cards/friday-hazard-cards'

export const HAZARDS: Hazard[] = [
  {
    freeCardAmount: 1,
    hazardPoints: HazardPoints.P_0_1_3,
    id: 1,
    name: HazardCardName.WITH_THE_RAFT_TO_THE_WRECK,
  },
  {
    freeCardAmount: 2,
    hazardPoints: HazardPoints.P_1_3_6,
    id: 2,
    name: HazardCardName.EXPLORING_THE_ISLAND,
  },
  {
    freeCardAmount: 3,
    hazardPoints: HazardPoints.P_2_5_8,
    id: 3,
    name: HazardCardName.FURTHER_EXPLORING_THE_ISLAND,
  },
  {
    freeCardAmount: 4,
    hazardPoints: HazardPoints.P_4_7_11,
    id: 4,
    name: HazardCardName.WILD_ANIMALS,
  },
  {
    freeCardAmount: 5,
    hazardPoints: HazardPoints.P_5_9_14,
    id: 5,
    name: HazardCardName.CANNIBALS,
  },
]
