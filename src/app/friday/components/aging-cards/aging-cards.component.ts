import { Component, OnInit, Input } from '@angular/core'
import { BattleComboId } from '../../models/card.interfaces'

@Component({
  selector: 'app-fr-aging-cards',
  styleUrls: ['./aging-cards.component.sass'],
  templateUrl: './aging-cards.component.html',
})
export class AgingCardsComponent implements OnInit {
  @Input() deck: BattleComboId[]

  constructor() { }

  ngOnInit() {
  }

}
