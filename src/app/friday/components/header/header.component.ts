import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { GameId, GameRound, GameDifficulty } from '../../models/game.interfaces'

@Component({
  selector: 'app-fr-header',
  styleUrls: ['./header.component.sass'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input() activeGameId: GameId
  @Input() currentRound: GameRound
  @Input() difficulty: GameDifficulty

  @Input() loading: boolean
  @Input() playing: boolean

  // temp for dev
  @Input() availableActions: string[]

  @Output() continue = new EventEmitter<GameId>()
  @Output() start = new EventEmitter<GameId>()

  constructor() { }

  ngOnInit() {
  }
}
