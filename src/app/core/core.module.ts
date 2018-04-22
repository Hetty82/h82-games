import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { SharedModule } from '../shared/shared.module'

import * as fromComponents from './components'
import * as fromContainers from './containers'
import * as fromServices from './services'


@NgModule({
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers,
  ],
  exports: [
    fromComponents.AppComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
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
