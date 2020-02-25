import { TestBed } from '@angular/core/testing';

import { SismosService } from './sismos.service';

describe('SismosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SismosService = TestBed.get(SismosService);
    expect(service).toBeTruthy();
  });
});
