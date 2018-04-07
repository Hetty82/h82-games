import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// import * as fromComponents from './components'
import * as fromContainers from './containers'


@NgModule({
  imports: [
    CommonModule
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
