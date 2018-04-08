import { NO_ERRORS_SCHEMA } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing'

import { UserService } from '../../services'
import { LoginComponent } from './login.component'


describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(async(() => {
    TestBed.configureCompiler({ preserveWhitespaces: false } as any).configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        {
          provide: UserService,
          useValue: {
            getUsers: jest.fn()
          }
        }
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent)
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
