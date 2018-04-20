import { TestBed, inject } from '@angular/core/testing';

import { TaskRepositoryService } from './task-repository.service';

describe('TaskRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskRepositoryService]
    });
  });

  it('should be created', inject([TaskRepositoryService], (service: TaskRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
