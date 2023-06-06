import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BAppComponent } from './b-app.component';

describe('BAppComponent', () => {
  let component: BAppComponent;
  let fixture: ComponentFixture<BAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
