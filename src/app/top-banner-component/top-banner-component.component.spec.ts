import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBannerComponentComponent } from './top-banner-component.component';

describe('TopBannerComponentComponent', () => {
  let component: TopBannerComponentComponent;
  let fixture: ComponentFixture<TopBannerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBannerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBannerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
