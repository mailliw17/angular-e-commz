import { TestBed } from '@angular/core/testing';

import { SimpleReportService } from './simple-report.service';

describe('SimpleReportService', () => {
  let service: SimpleReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
