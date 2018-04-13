import { NO_ERRORS_SCHEMA } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing'
import { StoreModule } from '@ngrx/store'

import { UserService } from '../../services'
import { LoginComponent } from './login.component'

import * as fromRoot from '../../../store'


describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(async(() => {
    TestBed.configureCompiler({ preserveWhitespaces: false } as any).configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ StoreModule.forRoot(fromRoot.reducers) ],
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
