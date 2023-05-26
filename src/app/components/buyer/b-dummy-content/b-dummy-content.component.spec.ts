import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BDummyContentComponent } from './b-dummy-content.component';

describe('BDummyContentComponent', () => {
  let component: BDummyContentComponent;
  let fixture: ComponentFixture<BDummyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BDummyContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BDummyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
