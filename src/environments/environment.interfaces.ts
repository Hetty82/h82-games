export interface Environment {
  api: Api
  production?: boolean
}

interface FridayApi {
  gameDetails: string
  games: string
}

interface Api {
  friday: FridayApi
  games: string
  users: string
}
