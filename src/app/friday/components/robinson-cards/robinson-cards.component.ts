import { Component, OnInit, Input } from '@angular/core'
import { BattleComboId } from '../../models/card.interfaces'

@Component({
  selector: 'app-fr-robinson-cards',
  styleUrls: ['./robinson-cards.component.sass'],
  templateUrl: './robinson-cards.component.html',
})
export class RobinsonCardsComponent implements OnInit {
  @Input() deck: BattleComboId[]
  @Input() discarded: BattleComboId[]

  constructor() { }

  ngOnInit() {
  }

}
