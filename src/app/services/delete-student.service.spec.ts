import { TestBed } from '@angular/core/testing';

import { DeleteStudentService } from './delete-student.service';

describe('DeleteStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteStudentService = TestBed.get(DeleteStudentService);
    expect(service).toBeTruthy();
  });
});
