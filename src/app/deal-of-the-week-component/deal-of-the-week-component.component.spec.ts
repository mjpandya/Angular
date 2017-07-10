import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealOfTheWeekComponentComponent } from './deal-of-the-week-component.component';

describe('DealOfTheWeekComponentComponent', () => {
  let component: DealOfTheWeekComponentComponent;
  let fixture: ComponentFixture<DealOfTheWeekComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealOfTheWeekComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealOfTheWeekComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
