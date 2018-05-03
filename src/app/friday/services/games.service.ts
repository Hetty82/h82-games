import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import { delay } from 'rxjs/operators'

import { environment } from '../../../environments/environment'

import { FridayGame, GameId } from '../models/friday-game.model'
import { FridayGameDetails } from '../models/friday-game-details.model'


@Injectable()
export class GamesService {
  constructor(
    private http: HttpClient,
  ) { }

  createGame(game: FridayGame) {
    const url = environment.api.friday.games

    return this.http.post(url, game).pipe(
      delay(1000),
    ) as Observable<FridayGame>
  }

  createGameDetails(game: FridayGame) {
    const url = environment.api.friday.gameDetails
    const body = new FridayGameDetails(game)

    return this.http.post(url, body).pipe(
      delay(1000),
    ) as Observable<FridayGameDetails>
  }

  deleteGame(gameId: GameId) {
    const url = environment.api.friday.games + '/' + gameId

    return this.http.delete(url).pipe(
      delay(1000),
    ) as Observable<GameId>
  }

  deleteGameDetails(gameId: GameId) {
    const url = environment.api.friday.gameDetails + '/' + gameId

    return this.http.delete(url).pipe(
      delay(1000),
    ) as Observable<GameId>
  }

  getGamesByUser(userId: number) {
    const url = environment.api.friday.games + `?userId=${userId}`

    return this.http.get(url).pipe(
      delay(1000),
    ) as Observable<FridayGame[]>
  }

  getGameDetails(gameId: GameId) {
    const url = environment.api.friday.gameDetails + '/' + gameId

    return this.http.get(url).pipe(
      delay(1000),
    ) as Observable<FridayGameDetails>
  }

  saveGameDetails(gameDetails: FridayGameDetails) {
    const url = environment.api.friday.gameDetails + '/' + gameDetails.id
    const body = gameDetails

    return this.http.put(url, body).pipe(
      delay(1000),
    ) as Observable<FridayGameDetails>
  }
}
