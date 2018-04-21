import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { SharedModule } from '../shared/shared.module'

import * as fromComponents from './components'
import * as fromContainers from './containers'
import * as fromServices from './services'


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers,
  ],
  exports: [
    fromComponents.AppComponent,
  ],
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: fromServices.services,
    }
  }
}
