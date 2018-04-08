

import { Routes } from '@angular/router'

import * as containers from './core/containers'


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/games',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: containers.LoginComponent,
  },
  {
    path: 'games',
    component: containers.GamesComponent,
  },
  {
    path: '**',
    component: containers.NotFoundComponent,
  },
]
