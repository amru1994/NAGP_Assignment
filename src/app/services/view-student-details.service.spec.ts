import { TestBed } from '@angular/core/testing';

import { ViewStudentDetailsService } from './view-student-details.service';

describe('ViewStudentDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewStudentDetailsService = TestBed.get(ViewStudentDetailsService);
    expect(service).toBeTruthy();
  });
});
