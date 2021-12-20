import { TestBed } from '@angular/core/testing';

import { AccesGuardService } from './acces-guard.service';

describe('AccesGuardService', () => {
  let service: AccesGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccesGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
