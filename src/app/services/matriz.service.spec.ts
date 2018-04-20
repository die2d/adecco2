import { TestBed, inject } from '@angular/core/testing';

import { MatrizService } from './matriz.service';

describe('MatrizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatrizService]
    });
  });

  it('should be created', inject([MatrizService], (service: MatrizService) => {
    expect(service).toBeTruthy();
  }));
});
