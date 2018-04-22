export interface User {
  id: number

  email: string
  name: string
}

export const createTestUser = (id = 1): User => {
  return {
    id,

    email: 'test@example.com',
    name: 'Test User',
  }
}

