import { Component, OnInit, Input } from '@angular/core'
import { PirateCardId } from '../../models/card.interfaces'

@Component({
  selector: 'app-fr-pirates',
  styleUrls: ['./pirates.component.sass'],
  templateUrl: './pirates.component.html',
})
export class PiratesComponent implements OnInit {
  @Input() pirateIds: PirateCardId[]

  constructor() { }

  ngOnInit() {
  }

}
