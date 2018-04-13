import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreModule } from '@ngrx/store'
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store'

import { CoreModule } from './core/core.module'
import { FridayModule } from './friday/friday.module'

import { AppComponent } from './core/containers'

import * as fromStore from './store'

import { routes } from './app.routes'
import { environment } from '../environments/environment'


@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

    EffectsModule.forRoot(fromStore.coreEffects),
    StoreModule.forRoot(fromStore.reducers, { metaReducers: fromStore.metaReducers }),
    // DevTools Instrumentation must be imported after importing StoreModule
    StoreDevtoolsModule.instrument({
      name: 'h82 Games - NgRx DevTools',
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),

    CoreModule.forRoot(),
    FridayModule,
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: fromStore.CustomRouterStateSerializer
    },
  ],
})
export class AppModule { }
