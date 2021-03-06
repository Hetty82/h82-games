import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { take } from 'rxjs/operators'

import * as fromRoot from '../../../store'


@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.sass'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  users$ = this.store.pipe(select(fromRoot.getUsers))

  constructor(private store: Store<fromRoot.State>) {
    this.store.pipe(
      take(1),
      select(fromRoot.getUsersLoaded),
    ).subscribe(loaded => {
      if (!loaded) this.store.dispatch(new fromRoot.LoadUsers())
    })
  }

  ngOnInit() {
  }

  selectPlayer(id: number) {
    this.store.dispatch(new fromRoot.SelectUser(id))
  }
}
