import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgingCardsComponent } from './aging-cards.component';

describe('AgingCardsComponent', () => {
  let component: AgingCardsComponent;
  let fixture: ComponentFixture<AgingCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgingCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
