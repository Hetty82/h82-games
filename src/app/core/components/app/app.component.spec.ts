import { NO_ERRORS_SCHEMA } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing'

import { AppComponent } from './app.component'


describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async(() => {
    TestBed.configureCompiler({ preserveWhitespaces: false } as any).configureTestingModule({
      declarations: [ AppComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
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
