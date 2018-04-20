import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import { tap } from 'rxjs/operators'

import { environment } from '../../../environments/environment'

import { Game } from '../models/game.model'


@Injectable()
export class GamesService {
  constructor(
    private http: HttpClient
  ) { }

  getGames(userId: number) {
    const url = environment.api.friday.games + `?userId=${userId}`
    return this.http.get(url) as Observable<Game[]>
  }

  createGame(game: Game) {
    console.log('in createGame (service)')
    const url = environment.api.friday.games
    // return this.http.post(url, game) as Observable<number>
    return this.http.post(url, game).pipe(
      tap(x => console.log('dolog:', x))
    ) as Observable<Game>
  }

  getGameDetails() {

  }
}
