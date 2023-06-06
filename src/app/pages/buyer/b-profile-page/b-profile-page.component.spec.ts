import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BProfilePageComponent } from './b-profile-page.component';

describe('BProfilePageComponent', () => {
  let component: BProfilePageComponent;
  let fixture: ComponentFixture<BProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
