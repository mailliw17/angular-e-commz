import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BChangePasswordPageComponent } from './b-change-password-page.component';

describe('BChangePasswordPageComponent', () => {
  let component: BChangePasswordPageComponent;
  let fixture: ComponentFixture<BChangePasswordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BChangePasswordPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BChangePasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
