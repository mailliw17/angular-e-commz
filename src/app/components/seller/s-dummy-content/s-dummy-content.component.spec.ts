import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDummyContentComponent } from './s-dummy-content.component';

describe('SDummyContentComponent', () => {
  let component: SDummyContentComponent;
  let fixture: ComponentFixture<SDummyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SDummyContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SDummyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
