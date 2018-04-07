import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { routes } from './app.routes'

import { CoreModule } from './core/core.module'
import { FridayModule } from './friday/friday.module'

import { AppComponent } from './core/containers'


@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    FridayModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
