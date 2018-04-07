import { AppComponent } from './app/app.component'
import { GamesComponent } from './games/games.component'
import { LoginComponent } from './login/login.component'
import { NotFoundComponent } from './not-found/not-found.component'

export const containers: any[] = [
  AppComponent,
  GamesComponent,
  LoginComponent,
  NotFoundComponent,
]

export * from './app/app.component'
export * from './games/games.component'
export * from './login/login.component'
export * from './not-found/not-found.component'
