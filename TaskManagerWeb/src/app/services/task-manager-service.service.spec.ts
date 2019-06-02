import { TestBed, inject } from '@angular/core/testing';

import { TaskManagerServiceService } from './task-manager-service.service';

describe('TaskManagerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskManagerServiceService]
    });
  });

  it('should be created', inject([TaskManagerServiceService], (service: TaskManagerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
