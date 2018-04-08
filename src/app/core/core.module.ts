import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import * as fromComponents from './components'
import * as fromContainers from './containers'
import * as fromServices from './services'


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers,
  ],
  exports: [
    fromContainers.AppComponent,
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
