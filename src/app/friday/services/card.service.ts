import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

import { CardsRemote } from '../models/card.interfaces'

import { BATTLE_COMBOS } from '../data/battle-combos.data'
import { HAZARD_COMBOS } from '../data/hazard-combos.data'

import { AGING_CARDS } from '../data/aging-cards.data'
import { HAZARD_CARDS } from '../data/hazard-cards.data'
import { PIRATE_CARDS } from '../data/pirate-cards.data'
import { ROBINSON_CARDS } from '../data/robinson-cards.data'


@Injectable()
export class CardService {
  constructor() { }

  getCards(): Observable<CardsRemote> {
    return of({
      battleCombos: BATTLE_COMBOS,
      hazardCombos: HAZARD_COMBOS,

      agingCards: AGING_CARDS,
      hazardCards: HAZARD_CARDS,
      pirateCards: PIRATE_CARDS,
      robinsonCards: ROBINSON_CARDS,
    })
  }
}
