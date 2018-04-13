import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { take } from 'rxjs/operators'

import { GamesService } from '../../services'
import { Game } from '../../interfaces/game.interface'

import * as fromRoot from '../../../store'


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.sass']
})
export class GamesComponent implements OnInit {
  games$ = this.store.pipe(select(fromRoot.getGames))

  constructor(private store: Store<fromRoot.State>) {
    this.store.pipe(
      take(1),
      select(fromRoot.getGamesLoaded)
    ).subscribe(loaded => {
      if (!loaded) this.store.dispatch(new fromRoot.LoadGames())
    })
  }

  ngOnInit() {
  }
}
