import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSliderComponentComponent } from './home-slider-component.component';

describe('HomeSliderComponentComponent', () => {
  let component: HomeSliderComponentComponent;
  let fixture: ComponentFixture<HomeSliderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSliderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSliderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
