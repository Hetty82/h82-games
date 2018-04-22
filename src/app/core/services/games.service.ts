import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'

import { environment } from '../../../environments/environment'

import { Game } from '../models/game.interface'


@Injectable()
export class GamesService {
  constructor(
    private http: HttpClient,
  ) { }

  getGames() {
    const url = environment.api.games

    return this.http.get(url) as Observable<Game[]>
  }
}
