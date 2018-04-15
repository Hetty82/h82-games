import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'

import { environment } from '../../../environments/environment'

import { User } from '../models/user.interface'


@Injectable()
export class UserService {
  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    const url = environment.api.users
    return this.http.get(url) as Observable<User[]>
  }
}
