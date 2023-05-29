import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SChangePasswordPageComponent } from './s-change-password-page.component';

describe('SChangePasswordPageComponent', () => {
  let component: SChangePasswordPageComponent;
  let fixture: ComponentFixture<SChangePasswordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SChangePasswordPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SChangePasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
