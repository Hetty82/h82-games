import { Component, OnInit, Input } from '@angular/core'


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {
  @Input() title: string
  @Input() subTitle: string

  constructor() {
  }

  ngOnInit() {
  }
}
