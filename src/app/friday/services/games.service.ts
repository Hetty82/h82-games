import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import { delay } from 'rxjs/operators'

import { environment } from '../../../environments/environment'

import { Game } from '../models/game.model'
import { GameDetails } from '../models/game-details.model'
import { GameId } from '../models/game.interfaces'

const fakeDelay = 500

@Injectable()
export class GamesService {
  constructor(
    private http: HttpClient,
  ) { }

  createGame(game: Game) {
    const url = environment.api.friday.games

    return this.http.post(url, game).pipe(
      delay(fakeDelay),
    ) as Observable<Game>
  }

  createGameDetails(game: Game) {
    const url = environment.api.friday.gameDetails
    const body = new GameDetails(game)

    return this.http.post(url, body).pipe(
      delay(fakeDelay),
    ) as Observable<GameDetails>
  }

  deleteGame(gameId: GameId) {
    const url = environment.api.friday.games + '/' + gameId

    return this.http.delete(url).pipe(
      delay(fakeDelay),
    ) as Observable<GameId>
  }

  deleteGameDetails(gameId: GameId) {
    const url = environment.api.friday.gameDetails + '/' + gameId

    return this.http.delete(url).pipe(
      delay(fakeDelay),
    ) as Observable<GameId>
  }

  getGamesByUser(userId: number) {
    const url = environment.api.friday.games + `?userId=${userId}`

    return this.http.get(url).pipe(
      delay(fakeDelay),
    ) as Observable<Game[]>
  }

  getGameDetails(gameId: GameId) {
    const url = environment.api.friday.gameDetails + '/' + gameId

    return this.http.get(url).pipe(
      delay(fakeDelay),
    ) as Observable<GameDetails>
  }

  saveGameDetails(gameDetails: GameDetails) {
    const url = environment.api.friday.gameDetails + '/' + gameDetails.id
    const body = gameDetails

    return this.http.put(url, body).pipe(
      delay(fakeDelay),
    ) as Observable<GameDetails>
  }
}
