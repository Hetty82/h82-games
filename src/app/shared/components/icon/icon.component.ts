import { Component, OnChanges, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core'


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon',
  styleUrls: ['./icon.component.sass'],
  templateUrl: './icon.component.html',
})
export class IconComponent implements OnChanges {
  @Input() color: string
  @Input() name: string
  @Input() secondColor: string
  @Input() size: string

  @HostBinding('class') classes: string

  symbolHref: string

  ngOnChanges() {
    this.classes = [
      'icon',
      this.color ? `-${this.color}` : null,
      this.name ? `-${this.name}` : null,
    ].filter(item => !!item).join(' ')

    this.symbolHref = '#' + this.name
  }
}
