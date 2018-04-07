

import { Routes } from '@angular/router'

// import { AuthGuard } from './auth/services/auth-guard.service'

import { NotFoundComponent } from './core/containers'
import { GamesComponent } from './core/containers'

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/games',
    pathMatch: 'full',
  },
  {
    path: 'games',
    component: GamesComponent,
  },
  {
    path: '**',
    component:  NotFoundComponent,
  },
]
