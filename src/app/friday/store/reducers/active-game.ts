
// import * as fromActiveGame from '../actions/active-game'
import { Round } from '../../models/game-details.interface'

export interface State {
  currentRound: Round
}

const initialState: State = {
  currentRound: Round.INITIAL,
}

// export function reducer(state: State = initialState, action: fromGames.GamesAction): State {
export function reducer(state: State = initialState, action: any): State {
  switch (action.type) {
    // case fromGames.LOAD_GAMES: {
    //   return {
    //     ...state,
    //     loading: true,
    //   }
    // }

    // case fromGames.LOAD_GAMES_SUCCESS: {
    //   const games = action.payload

    //   const entities = games.reduce((newEntities: GameEntities, game: Game) => {
    //       return {
    //         ...newEntities,
    //         [game.id]: game,
    //       }
    //     }, { ...state.entities }
    //   )

    //   const ids = games.map(game => game.id)

    //   return {
    //     ...state,
    //     entities,
    //     ids,
    //     loading: false,
    //     loaded: true,
    //   }
    // }

    // case fromGames.LOAD_GAMES_FAIL: {
    //   return {
    //     ...state,
    //     loading: false,
    //     loaded: false,
    //   }
    // }

    default:
      return state
  }
}

export const getCurrentRound = (state: State) => state.currentRound
