import { Component, OnInit, Input } from '@angular/core'
import { BattleComboId } from '../../models/card.interfaces'

@Component({
  selector: 'app-fr-destroyed',
  styleUrls: ['./destroyed.component.sass'],
  templateUrl: './destroyed.component.html',
})
export class DestroyedComponent implements OnInit {
  @Input() ids: BattleComboId[]

  constructor() { }

  ngOnInit() {
  }

}
