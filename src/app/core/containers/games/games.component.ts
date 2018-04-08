import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { GamesService } from '../../services'
import { Game } from '../../interfaces/game.interface'


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.sass']
})
export class GamesComponent implements OnInit {
  games$: Observable<Game[]> = this.gamesService.getGames()

  constructor(
    private gamesService: GamesService
  ) { }

  ngOnInit() {
  }
}
