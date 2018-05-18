import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { HazardCardId, BattleComboId } from '../../models/card.interfaces'
import { HazardCardEntities } from '../../store/reducers/cards.reducer'
import { InnerGameActionTypes } from '../../store/actions/inner-game.actions'

@Component({
  selector: 'app-fr-battle',
  styleUrls: ['./battle.component.sass'],
  templateUrl: './battle.component.html',
})
export class BattleComponent implements OnInit {
  @Input() actions: string[]

  @Input() playedHazardCardId: HazardCardId
  @Input() playedFreeComboIds: BattleComboId[]
  @Input() playedPaidComboIds: BattleComboId[]
  @Input() selectedForDestructionIds: BattleComboId[]

  @Input() remainingFreeCardsAmount: number
  @Input() requiredBattlePoints: number

  @Input() hazardCardEntities: HazardCardEntities

  @Output() selectForDestruction = new EventEmitter<BattleComboId>()
  @Output() deselectForDestruction = new EventEmitter<BattleComboId>()
  @Output() lose = new EventEmitter()
  @Output() confirmLose = new EventEmitter()
  @Output() cancelLose = new EventEmitter()
  @Output() win = new EventEmitter<number>()


  constructor() { }

  ngOnInit() {
  }

  isDestroyEnabled() {
    return this.actions.includes(InnerGameActionTypes.SELECT_FOR_DESTRUCTION)
  }

  isLoseDisabled() {
    return !this.actions.includes(InnerGameActionTypes.LOSE_BATTLE)
  }
  isConfirmLoseDisabled() {
    return !this.actions.includes(InnerGameActionTypes.LOSE_BATTLE_CONFIRM)
  }
  isCancelLoseDisabled() {
    return !this.actions.includes(InnerGameActionTypes.LOSE_BATTLE_CANCEL)
  }

  isWinDisabled() {
    return !this.actions.includes(InnerGameActionTypes.WIN_BATTLE)
  }

  updateSelected(event) {
    const el: HTMLInputElement = event.target
    if (el.checked) {
      this.selectForDestruction.emit(+el.value)
    } else {
      this.deselectForDestruction.emit(+el.value)
    }
  }
}
