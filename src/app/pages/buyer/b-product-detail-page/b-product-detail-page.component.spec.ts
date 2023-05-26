import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BProductDetailPageComponent } from './b-product-detail-page.component';

describe('BProductDetailPageComponent', () => {
  let component: BProductDetailPageComponent;
  let fixture: ComponentFixture<BProductDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BProductDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BProductDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
