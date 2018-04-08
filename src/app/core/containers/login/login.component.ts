import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { UserService } from '../../services'
import { User } from '../../interfaces/user.interface'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  users$: Observable<User[]> = this.userService.getUsers()

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }
}
