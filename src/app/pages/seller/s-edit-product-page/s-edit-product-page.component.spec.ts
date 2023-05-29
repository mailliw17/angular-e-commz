import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SEditProductPageComponent } from './s-edit-product-page.component';

describe('SEditProductPageComponent', () => {
  let component: SEditProductPageComponent;
  let fixture: ComponentFixture<SEditProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SEditProductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SEditProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
