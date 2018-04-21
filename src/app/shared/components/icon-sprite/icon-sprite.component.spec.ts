import { NO_ERRORS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { IconSpriteComponent } from './icon-sprite.component'


describe('IconSpriteComponent', () => {
  let component: IconSpriteComponent
  let fixture: ComponentFixture<IconSpriteComponent>

  beforeEach(async(() => {
    TestBed.configureCompiler({ preserveWhitespaces: false } as any).configureTestingModule({
      declarations: [ IconSpriteComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSpriteComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  test('should create component', () => {
    expect(component).toBeTruthy()
  })

  test('should match snapshot', () => {
    expect(fixture).toMatchSnapshot()
  })
})
