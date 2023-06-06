import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAppComponent } from './s-app.component';

describe('SAppComponent', () => {
  let component: SAppComponent;
  let fixture: ComponentFixture<SAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
