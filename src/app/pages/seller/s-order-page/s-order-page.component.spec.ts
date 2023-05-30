import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SOrderPageComponent } from './s-order-page.component';

describe('SOrderPageComponent', () => {
  let component: SOrderPageComponent;
  let fixture: ComponentFixture<SOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SOrderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
