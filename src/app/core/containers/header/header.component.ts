import { Component, OnInit, Input } from '@angular/core'
import { Store, select } from '@ngrx/store'

import * as fromRoot from '../../../store'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string
  @Input() subTitle: string

  user$ = this.store.pipe(select(fromRoot.getCurrentUser))

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new fromRoot.DeselectUser())
  }
}
