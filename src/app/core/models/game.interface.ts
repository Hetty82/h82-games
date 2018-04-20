export interface Game {
  id: number
  name: string
  accessible: boolean
}

export const createTestGame = (id = 1): Game => {
  return {
    id,
    name: 'Test Game',
    accessible: true,
  }
}
