import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

// import * as fromComponents from './components'
import { routes } from './friday.routes'

import * as fromContainers from './containers'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    // ...fromComponents.components,
    ...fromContainers.containers,
  ],
  exports: [
    fromContainers.FridayComponent,
  ],
})
export class FridayModule { }
