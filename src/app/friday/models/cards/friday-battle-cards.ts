import { BattleCardName, BattleData, BattleCardAbility, BattleCardDestroyCost } from './friday-robinson-cards'

export type BattleCardKey = string

export class BattleCard {
  readonly key: BattleCardKey

  readonly ability: BattleCardAbility
  readonly abilityIsMandatory: boolean
  readonly battlePoints: number
  readonly destroyCost: BattleCardDestroyCost
  readonly name: BattleCardName

  constructor(data: BattleData, id: number, isAgingCard = false) {
    const keyPrefix = isAgingCard ? 'A' : 'R'
    this.key = `${keyPrefix}_${id}`

    this.ability = data.ability
    this.abilityIsMandatory = isAgingCard ? true : false
    this.battlePoints = data.battlePoints
    this.destroyCost = isAgingCard ? BattleCardDestroyCost.HIGH : BattleCardDestroyCost.NORMAL
    this.name = data.name
  }
}
