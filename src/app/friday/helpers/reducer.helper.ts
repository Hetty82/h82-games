export function createEntities<T extends { id: number }>(array: T[]): { [id: number]: T } {
  return array.reduce((newEntities: { [id: number]: T }, item: T) => ({
    ...newEntities,
    [item.id]: item,
  }), {} )
}

export function createIdsArray<T extends { amount: number, id: number }>( items: T[] ): number[] {
  let ids = []
  items.forEach(item => {
    for (let i = 0; i < item.amount; i++) {
      ids = [ ...ids, item.id ]
    }
  })

  return ids
}
