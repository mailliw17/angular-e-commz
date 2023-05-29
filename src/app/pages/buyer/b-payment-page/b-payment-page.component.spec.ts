import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BPaymentPageComponent } from './b-payment-page.component';

describe('BPaymentPageComponent', () => {
  let component: BPaymentPageComponent;
  let fixture: ComponentFixture<BPaymentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BPaymentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BPaymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
