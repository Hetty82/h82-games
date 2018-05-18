import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { HazardCardId } from '../../models/card.interfaces'
import { HazardCardEntities } from '../../store/reducers/cards.reducer'
import { InnerGameActionTypes } from '../../store/actions/inner-game.actions'


@Component({
  selector: 'app-fr-hazard-cards',
  styleUrls: ['./hazard-cards.component.sass'],
  templateUrl: './hazard-cards.component.html',
})
export class HazardCardsComponent implements OnInit {
  @Input() actions: string[]
  @Input() deck: HazardCardId[]
  @Input() discarded: HazardCardId[]
  @Input() entities: HazardCardEntities[]
  @Input() optionIds: HazardCardId[]

  @Output() drawHazardCards = new EventEmitter()
  @Output() playHazardCard = new EventEmitter<HazardCardId>()

  constructor() { }

  ngOnInit() {
  }

  isDrawDisabled() {
    return !this.actions.includes(InnerGameActionTypes.DRAW_HAZARDS)
  }

  isPlayDisabled() {
    return !this.actions.includes(InnerGameActionTypes.PLAY_HAZARD)
  }
}
