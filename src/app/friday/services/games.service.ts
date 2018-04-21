import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import { tap } from 'rxjs/operators'

import { environment } from '../../../environments/environment'

import { FridayGame } from '../models/friday-game.model'


@Injectable()
export class GamesService {
  constructor(
    private http: HttpClient,
  ) { }

  getGamesByUser(userId: number) {
    const url = environment.api.friday.games + `?userId=${userId}`
    return this.http.get(url) as Observable<FridayGame[]>
  }

  createGame(game: FridayGame) {
    const url = environment.api.friday.games
    return this.http.post(url, game) as Observable<FridayGame>
  }

  deleteGame(gameId: number) {
    const url = environment.api.friday.games + '/' + gameId
    return this.http.delete(url) as Observable<number>
  }

  getGameDetails() {
  }
}
