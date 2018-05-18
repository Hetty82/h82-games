import { Component, OnInit, Input } from '@angular/core'
import { HazardCardId, BattleComboId } from '../../models/card.interfaces'
import { HazardCardEntities, HazardComboEntities, BattleComboEntities } from '../../store/reducers/cards.reducer'

@Component({
  selector: 'app-fr-battle',
  styleUrls: ['./battle.component.sass'],
  templateUrl: './battle.component.html',
})
export class BattleComponent implements OnInit {
  @Input() playedHazardId: HazardCardId
  @Input() playedFreeComboIds: BattleComboId[]
  @Input() playedPaidComboIds: BattleComboId[]

  @Input() hazardCardEntities: HazardCardEntities
  // @Input() hazardComboEntities: HazardComboEntities
  // @Input() battleComboEntities: BattleComboEntities

  constructor() { }

  ngOnInit() {
  }

}
