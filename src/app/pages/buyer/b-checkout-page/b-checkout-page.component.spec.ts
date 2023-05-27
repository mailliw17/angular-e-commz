import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCheckoutPageComponent } from './b-checkout-page.component';

describe('BCheckoutPageComponent', () => {
  let component: BCheckoutPageComponent;
  let fixture: ComponentFixture<BCheckoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BCheckoutPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BCheckoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
