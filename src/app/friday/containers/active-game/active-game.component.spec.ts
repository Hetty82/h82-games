import { NO_ERRORS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { Store } from '@ngrx/store'

import { ActiveGameComponent } from './active-game.component'


describe('ActiveGameComponent', () => {
  let component: ActiveGameComponent
  let fixture: ComponentFixture<ActiveGameComponent>

  beforeEach(async(() => {
    TestBed.configureCompiler({ preserveWhitespaces: false } as any).configureTestingModule({
      declarations: [ ActiveGameComponent ],
      providers: [
        {
          provide: Store,
          useValue: {
            pipe: jest.fn(),
          },
        }
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveGameComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create component', () => {
    expect(component).toBeTruthy()
  })

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot()
  })
})
