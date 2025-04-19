import { TestBed } from '@angular/core/testing';

import { ParentsService } from './parents.service';

describe('ParentsService', () => {
  let service: ParentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
