import { NO_ERRORS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { Store } from '@ngrx/store'

import { HeaderComponent } from './header.component'


describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async(() => {
    TestBed.configureCompiler({ preserveWhitespaces: false } as any).configureTestingModule({
      declarations: [ HeaderComponent ],
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
    fixture = TestBed.createComponent(HeaderComponent)
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
