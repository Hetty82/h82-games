import { Routes } from '@angular/router'

import * as fromContainers from './containers'
import * as fromComponents from './components'


export const routes: Routes = [
  {
    path: '',

    component: fromComponents.FridayComponent,
  },
  {
    path: ':gameId',

    component: fromContainers.ActiveGameComponent,
  },
]
