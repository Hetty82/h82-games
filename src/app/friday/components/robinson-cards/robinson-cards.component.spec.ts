import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { RobinsonCardsComponent } from './robinson-cards.component'

describe('RobinsonCardsComponent', () => {
  let component: RobinsonCardsComponent
  let fixture: ComponentFixture<RobinsonCardsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobinsonCardsComponent ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(RobinsonCardsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
