import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { SharedModule } from '../shared/shared.module'

import { routes } from './friday.routes'

import * as fromComponents from './components'
import * as fromContainers from './containers'
import * as fromServices from './services'
import * as fromStore from './store'


@NgModule({
  imports: [
    // Angular
    CommonModule,
    RouterModule.forChild(routes),

    // Ngrx
    EffectsModule.forFeature(fromStore.fridayEffects),
    StoreModule.forFeature('friday', fromStore.reducers ),

    // Other
    SharedModule,
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers,
  ],
  exports: [
    fromComponents.FridayComponent,
  ],
  providers: fromServices.services,
})
export class FridayModule { }
