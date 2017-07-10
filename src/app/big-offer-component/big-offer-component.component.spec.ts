import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigOfferComponentComponent } from './big-offer-component.component';

describe('BigOfferComponentComponent', () => {
  let component: BigOfferComponentComponent;
  let fixture: ComponentFixture<BigOfferComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigOfferComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigOfferComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
