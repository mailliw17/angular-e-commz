import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SProfilePageComponent } from './s-profile-page.component';

describe('SProfilePageComponent', () => {
  let component: SProfilePageComponent;
  let fixture: ComponentFixture<SProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
