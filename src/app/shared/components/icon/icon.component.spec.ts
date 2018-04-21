import { NO_ERRORS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { IconComponent } from './icon.component'


describe('IconComponent', () => {
  let component: IconComponent
  let fixture: ComponentFixture<IconComponent>

  beforeEach(async(() => {
    TestBed.configureCompiler({ preserveWhitespaces: false } as any).configureTestingModule({
      declarations: [ IconComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent)
    component = fixture.componentInstance
    component.name = 'test'
    fixture.detectChanges()
  })

  test('should create component', () => {
    expect(component).toBeTruthy()
  })

  test('should match snapshot', () => {
    expect(fixture).toMatchSnapshot()
  })

  describe('it should set the correct class names', () => {
    test('should add the name class', () => {
      expect(component.classes['-test']).toBeFalsy()

      component.name = 'test'
      component.ngOnChanges()

      expect(component.classes['-test']).toBe(true)
    })

    test('should add the color class', () => {
      expect(component.classes['-red']).toBeFalsy()

      component.color = 'red'
      component.ngOnChanges()

      expect(component.classes['-red']).toBe(true)
    })

    test.skip('should add the second color class', () => {
      expect(component.classes['-red-second']).toBeFalsy()

      component.secondColor = 'red'
      component.ngOnChanges()

      expect(component.classes['-red-second']).toBe(true)
    })

    test.skip('should add the size class', () => {
      expect(component.classes['-md']).toBeFalsy()

      component.size = 'md'
      component.ngOnChanges()

      expect(component.classes['-md']).toBe(true)
    })
  })

  test('should update the symbolRef', () => {
    component.name = 'test1'
    component.ngOnChanges()
    expect(component.symbolHref).toBe('#test1')

    component.name = 'test2'
    component.ngOnChanges()
    expect(component.symbolHref).toBe('#test2')
  })
})
