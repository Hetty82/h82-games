import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

import { RemoteCardSet } from '../models/deck.model'

import { AGING_CARDS } from '../data/aging-cards.data'
import { BATTLE_DATAS } from '../data/battle-datas.data'
import { HAZARD_CARDS } from '../data/hazard-cards.data'
import { HAZARDS } from '../data/hazards.data'
import { PIRATE_CARDS } from '../data/pirate-cards.data'
import { ROBINSON_CARDS } from '../data/robinson-cards.data'


@Injectable()
export class CardService {
  constructor() { }

  getCards(): Observable<RemoteCardSet> {
    return of({
      agingCards: AGING_CARDS,
      battleDatas: BATTLE_DATAS,
      hazardCards: HAZARD_CARDS,
      hazards: HAZARDS,
      pirateCards: PIRATE_CARDS,
      robinsonCards: ROBINSON_CARDS,
    })
  }
}
