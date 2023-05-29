import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSimpleReportPageComponent } from './s-simple-report-page.component';

describe('SSimpleReportPageComponent', () => {
  let component: SSimpleReportPageComponent;
  let fixture: ComponentFixture<SSimpleReportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SSimpleReportPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SSimpleReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
