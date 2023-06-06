import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMyOrderDetailPageComponent } from './b-my-order-detail-page.component';

describe('BMyOrderDetailPageComponent', () => {
  let component: BMyOrderDetailPageComponent;
  let fixture: ComponentFixture<BMyOrderDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMyOrderDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BMyOrderDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
