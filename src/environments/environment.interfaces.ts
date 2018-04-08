export interface Environment {
  api: Api
  production?: boolean
}

interface Api {
  users: string
  games: string
}
