import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialOffersComponentComponent } from './special-offers-component.component';

describe('SpecialOffersComponentComponent', () => {
  let component: SpecialOffersComponentComponent;
  let fixture: ComponentFixture<SpecialOffersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialOffersComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialOffersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
