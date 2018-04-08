import { GamesService } from './games.service'
import { UserService } from './user.service'

export const services: any[] = [
  GamesService,
  UserService,
]

export * from './games.service'
export * from './user.service'
