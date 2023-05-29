import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SManageProductPageComponent } from './s-manage-product-page.component';

describe('SManageProductPageComponent', () => {
  let component: SManageProductPageComponent;
  let fixture: ComponentFixture<SManageProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SManageProductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SManageProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
