import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-fr-lives',
  styleUrls: ['./lives.component.sass'],
  templateUrl: './lives.component.html',
})
export class LivesComponent implements OnInit {
  @Input() lives: number
  @Input() maxLives: number

  constructor() { }

  ngOnInit() {
  }

}
