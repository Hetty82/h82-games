import { GamesEffects } from './games'
import { UserEffects } from './user'

export const coreEffects: any[] = [
  GamesEffects,
  UserEffects
]

export * from './games'
export * from './user'
