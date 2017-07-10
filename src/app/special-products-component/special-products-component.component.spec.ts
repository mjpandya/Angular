import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialProductsComponentComponent } from './special-products-component.component';

describe('SpecialProductsComponentComponent', () => {
  let component: SpecialProductsComponentComponent;
  let fixture: ComponentFixture<SpecialProductsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialProductsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialProductsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
