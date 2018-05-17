import { Component, OnInit, Input } from '@angular/core'
import { GameRound } from '../../models/game.interfaces'

@Component({
  selector: 'app-fr-round',
  styleUrls: ['./round.component.sass'],
  templateUrl: './round.component.html',
})
export class RoundComponent implements OnInit {
  @Input() currentRound: GameRound

  constructor() { }

  ngOnInit() {
  }

}
