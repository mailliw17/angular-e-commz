import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAddProductPageComponent } from './s-add-product-page.component';

describe('SAddProductPageComponent', () => {
  let component: SAddProductPageComponent;
  let fixture: ComponentFixture<SAddProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAddProductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SAddProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
