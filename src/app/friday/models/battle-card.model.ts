import { BattleCardAbility, BattleCardDestroyCost, BattleCardName, BattleData } from './card.interfaces'

export type BattleCardKey = string

export class BattleCard {
  key: BattleCardKey

  ability: BattleCardAbility
  abilityIsMandatory: boolean
  battlePoints: number
  destroyCost: BattleCardDestroyCost
  name: BattleCardName

  constructor(data: BattleData, id: number, isAgingCard = false) {
    const keyPrefix = isAgingCard ? 'A' : 'R'
    this.key = `${keyPrefix}${id}`

    this.ability = data.ability
    this.abilityIsMandatory = isAgingCard ? true : false
    this.battlePoints = data.battlePoints
    this.destroyCost = isAgingCard ? BattleCardDestroyCost.HIGH : BattleCardDestroyCost.NORMAL
    this.name = data.name
  }
}
