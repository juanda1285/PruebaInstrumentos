import { TestBed } from '@angular/core/testing';

import { InstrumentosServiceService } from './instrumentos-service.service';

describe('InstrumentosServiceService', () => {
  let service: InstrumentosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstrumentosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
