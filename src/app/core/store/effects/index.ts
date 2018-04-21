import { GamesEffects } from './games.effects'
import { UserEffects } from './user.effects'

export const coreEffects: any[] = [
  GamesEffects,
  UserEffects,
]

export * from './games.effects'
export * from './user.effects'
