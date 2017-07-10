import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSellersComponentComponent } from './top-sellers-component.component';

describe('TopSellersComponentComponent', () => {
  let component: TopSellersComponentComponent;
  let fixture: ComponentFixture<TopSellersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSellersComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSellersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
