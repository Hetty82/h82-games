

import { Routes } from '@angular/router'

import * as fromContainers from './core/containers'
import * as fromComponents from './core/components'


export const routes: Routes = [
  {
    path: '',

    pathMatch: 'full',
    redirectTo: '/games',
  },
  {
    path: 'login',

    component: fromContainers.LoginComponent,
  },
  {
    path: 'games',

    component: fromContainers.GamesComponent,
  },
  {
    path: 'friday',

    loadChildren: './friday/friday.module#FridayModule',
  },
  {
    path: '**',

    component: fromComponents.NotFoundComponent,
  },
]
