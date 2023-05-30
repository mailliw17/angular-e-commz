import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SOrderDetailPageComponent } from './s-order-detail-page.component';

describe('SOrderDetailPageComponent', () => {
  let component: SOrderDetailPageComponent;
  let fixture: ComponentFixture<SOrderDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SOrderDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SOrderDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
