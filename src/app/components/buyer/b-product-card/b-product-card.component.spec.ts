import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BProductCardComponent } from './b-product-card.component';

describe('BProductCardComponent', () => {
  let component: BProductCardComponent;
  let fixture: ComponentFixture<BProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
