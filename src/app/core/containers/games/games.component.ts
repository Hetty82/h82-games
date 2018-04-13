import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { take } from 'rxjs/operators'

import { GamesService } from '../../services'
import { Game } from '../../interfaces/game.interface'

import * as fromStore from '../../../store'

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.sass']
})
export class GamesComponent implements OnInit {
  games$ = this.store.pipe(select(fromStore.getGames))

  constructor(private store: Store<fromStore.State>) {
    this.store.pipe(
      take(1),
      select(fromStore.getGamesLoaded)
    ).subscribe(loaded => {
      if (!loaded) this.store.dispatch(new fromStore.LoadGames())
    })
  }

  ngOnInit() {
  }
}
