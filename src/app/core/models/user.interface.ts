export interface User {
  id: number
  name: string
  email: string
}

export const createTestUser = (id = 1): User => {
  return {
    id,
    name: 'Test User',
    email: 'test@example.com'
  }
}

