export interface Game {
  id: number

  accessible: boolean
  name: string
}

export const createTestGame = (id = 1): Game => {
  return {
    id,

    accessible: true,
    name: 'Test Game',
  }
}
