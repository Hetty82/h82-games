import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { StoreModule } from '@ngrx/store'

import { routes } from './friday.routes'

import * as fromComponents from './components'
import * as fromContainers from './containers'
import * as fromStore from './store'


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('friday', fromStore.reducers ),
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers,
  ],
  exports: [
    fromComponents.FridayComponent,
  ],
})
export class FridayModule { }
