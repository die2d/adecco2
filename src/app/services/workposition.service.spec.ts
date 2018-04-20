import { TestBed, inject } from '@angular/core/testing';

import { WorkpositionService } from './workposition.service';

describe('WorkpositionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkpositionService]
    });
  });

  it('should be created', inject([WorkpositionService], (service: WorkpositionService) => {
    expect(service).toBeTruthy();
  }));
});
