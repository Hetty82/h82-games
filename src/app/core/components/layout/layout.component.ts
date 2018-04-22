import { Component, OnInit, Input } from '@angular/core'


@Component({
  selector: 'app-layout',
  styleUrls: ['./layout.component.sass'],
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  @Input() title: string
  @Input() subTitle: string

  constructor() {
  }

  ngOnInit() {
  }
}
