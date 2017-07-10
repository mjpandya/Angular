import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersComponentComponent } from './offers-component.component';

describe('OffersComponentComponent', () => {
  let component: OffersComponentComponent;
  let fixture: ComponentFixture<OffersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
