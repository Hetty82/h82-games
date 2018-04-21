import { Component, HostBinding } from '@angular/core'

@Component({
  selector: 'app-icon-sprite',
  templateUrl: './icon-sprite.component.html',
})
export class IconSpriteComponent {
  @HostBinding('attr.hidden') hidden = true
}
