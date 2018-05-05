import { GamesEffects } from './games.effects'
import { InnerGameEffects } from './inner-game.effects'
import { OuterGameEffects } from './outer-game.effects'

export const fridayEffects: any[] = [
  GamesEffects,
  InnerGameEffects,
  OuterGameEffects,
]

export * from './games.effects'
export * from './inner-game.effects'
export * from './outer-game.effects'
