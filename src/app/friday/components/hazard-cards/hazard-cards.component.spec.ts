import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HazardCardsComponent } from './hazard-cards.component'

describe('HazardCardsComponent', () => {
  let component: HazardCardsComponent
  let fixture: ComponentFixture<HazardCardsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HazardCardsComponent ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardCardsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
