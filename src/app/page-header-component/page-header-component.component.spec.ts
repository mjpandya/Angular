import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderComponentComponent } from './page-header-component.component';

describe('PageHeaderComponentComponent', () => {
  let component: PageHeaderComponentComponent;
  let fixture: ComponentFixture<PageHeaderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
