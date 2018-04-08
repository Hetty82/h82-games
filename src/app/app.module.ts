import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { routes } from './app.routes'

import { CoreModule } from './core/core.module'
import { FridayModule } from './friday/friday.module'

import { AppComponent } from './core/containers'


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

    CoreModule.forRoot(),
    FridayModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
