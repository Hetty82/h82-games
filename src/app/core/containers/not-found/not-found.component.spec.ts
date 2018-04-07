import { TestBed, async } from '@angular/core/testing'
import { NotFoundComponent } from './not-found.component'

describe('NotFoundComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotFoundComponent
      ],
    }).compileComponents()
  }))
  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(NotFoundComponent)
    const component = fixture.debugElement.componentInstance
    expect(component).toBeTruthy()
  }))
})
