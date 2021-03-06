import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { take } from 'rxjs/operators'


import * as fromRoot from '../../../store'


@Component({
  selector: 'app-games',
  styleUrls: ['./games.component.sass'],
  templateUrl: './games.component.html',
})
export class GamesComponent implements OnInit {
  games$ = this.store.pipe(select(fromRoot.getGames))
  user$ = this.store.pipe(select(fromRoot.getCurrentUser))

  constructor(private store: Store<fromRoot.State>) {
    this.store.pipe(
      take(1),
      select(fromRoot.getGamesLoaded),
    ).subscribe(loaded => {
      if (!loaded) this.store.dispatch(new fromRoot.LoadGames())
    })
  }

  ngOnInit() {
  }

  selectGame(name: string) {
    this.store.dispatch(new fromRoot.SelectGame(name))
  }
}
