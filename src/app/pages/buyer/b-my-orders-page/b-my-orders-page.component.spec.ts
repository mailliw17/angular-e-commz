import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMyOrdersPageComponent } from './b-my-orders-page.component';

describe('BMyOrdersPageComponent', () => {
  let component: BMyOrdersPageComponent;
  let fixture: ComponentFixture<BMyOrdersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMyOrdersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BMyOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
