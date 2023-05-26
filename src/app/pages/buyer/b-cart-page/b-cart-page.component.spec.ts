import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCartPageComponent } from './b-cart-page.component';

describe('BCartPageComponent', () => {
  let component: BCartPageComponent;
  let fixture: ComponentFixture<BCartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BCartPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BCartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
