import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'

import { take } from 'rxjs/operators'

import { UserService } from '../../services'
import { User } from '../../interfaces/user.interface'

import * as fromStore from '../../../store'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  users$ = this.store.pipe(select(fromStore.getUsers))

  constructor(private store: Store<fromStore.State>) {
    this.store.pipe(
      take(1),
      select(fromStore.getUsersLoaded)
    ).subscribe(loaded => {
      if (!loaded) this.store.dispatch(new fromStore.LoadUsers())
    })
  }

  ngOnInit() {
  }
}
