// Pure functions
export function processCardAmounts<T extends { amount: number }>( cards: T[], card: T ): T[] {
  let addedCards = []
  for (let i = 0; i < card.amount; i++) {
    addedCards = [ ...addedCards, card ]
  }

  return [ ...cards, ...addedCards ]
}

// Impure functions
export function shuffle<T>(array: T[]): T[] {
  if (!Array.isArray(array)) throw new TypeError(`Expected an Array, got ${typeof array} instead.`)

  if (array.length <= 1) return array

  const oldArray = [ ...array ]
  let newArray = new Array<T>()

  while (oldArray.length) {
    const i = Math.floor(Math.random() * oldArray.length)
    newArray = newArray.concat(oldArray.splice(i, 1))
  }

  return newArray
}
