import { TestBed, inject } from '@angular/core/testing';

import { EvaluadoresService } from './evaluadores.service';

describe('EvaluadoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvaluadoresService]
    });
  });

  it('should be created', inject([EvaluadoresService], (service: EvaluadoresService) => {
    expect(service).toBeTruthy();
  }));
});
