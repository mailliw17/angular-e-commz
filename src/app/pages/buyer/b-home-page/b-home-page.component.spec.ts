import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BHomePageComponent } from './b-home-page.component';

describe('BHomePageComponent', () => {
  let component: BHomePageComponent;
  let fixture: ComponentFixture<BHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
