import { NO_ERRORS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { GamesComponent } from './games.component'
import { GamesService } from '../../services'


describe('GamesComponent', () => {
  let component: GamesComponent
  let fixture: ComponentFixture<GamesComponent>

  beforeEach(async(() => {
    TestBed.configureCompiler({ preserveWhitespaces: false } as any).configureTestingModule({
      declarations: [ GamesComponent ],
      providers: [
        {
          provide: GamesService,
          useValue: {
            getGames: jest.fn()
          }
        }
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesComponent)
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
