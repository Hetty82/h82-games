import { NO_ERRORS_SCHEMA } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { StoreModule } from '@ngrx/store'

import { LayoutComponent } from './layout.component'

import * as fromRoot from '../../../store'


describe('LayoutComponent', () => {
  let component: LayoutComponent
  let fixture: ComponentFixture<LayoutComponent>

  beforeEach(async(() => {
    TestBed.configureCompiler({ preserveWhitespaces: false } as any).configureTestingModule({
      declarations: [ LayoutComponent ],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(fromRoot.reducers),
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent)
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
