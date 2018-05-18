import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { BattleComboId } from '../../models/card.interfaces'
import { InnerGameActionTypes } from '../../store/actions/inner-game.actions'


@Component({
  selector: 'app-fr-robinson-cards',
  styleUrls: ['./robinson-cards.component.sass'],
  templateUrl: './robinson-cards.component.html',
})
export class RobinsonCardsComponent implements OnInit {
  @Input() actions: string[]
  @Input() deck: BattleComboId[]
  @Input() discarded: BattleComboId[]

  @Output() playFreeCard = new EventEmitter()
  @Output() playPaidCard = new EventEmitter()
  @Output() shuffleDeck = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  isPlayFreeDisabled() {
    return !this.actions.includes(InnerGameActionTypes.PLAY_FREE_BATTLE_CARD)
  }

  isPlayPaidDisabled() {
    return !this.actions.includes(InnerGameActionTypes.PLAY_PAID_BATTLE_CARD)
  }

  isShuffleDeckDisabled() {
    return !this.actions.includes(InnerGameActionTypes.SHUFFLE_BATTLE_CARDS)
  }
}
