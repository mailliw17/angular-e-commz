import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDashboardPageComponent } from './s-dashboard-page.component';

describe('SDashboardPageComponent', () => {
  let component: SDashboardPageComponent;
  let fixture: ComponentFixture<SDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SDashboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
