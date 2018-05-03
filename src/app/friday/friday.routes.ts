import { Routes } from '@angular/router'

import * as fromContainers from './containers'
import * as fromComponents from './components'

// tslint:disable:object-literal-sort-keys

export const routes: Routes = [
  {
    path: '',
    component: fromComponents.FridayComponent,
    children: [
      {
        path: ':gameId',
        component: fromContainers.ActiveGameComponent,
      },
    ],
  },
]
