import { TestBed } from '@angular/core/testing';

import { DummyThievesService } from './dummy-thieves.service';

describe('DummyThievesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DummyThievesService = TestBed.get(DummyThievesService);
    expect(service).toBeTruthy();
  });
});
