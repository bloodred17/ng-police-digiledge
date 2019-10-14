import { TestBed } from '@angular/core/testing';

import { ThievesService } from './thieves.service';

describe('ThievesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThievesService = TestBed.get(ThievesService);
    expect(service).toBeTruthy();
  });
});
