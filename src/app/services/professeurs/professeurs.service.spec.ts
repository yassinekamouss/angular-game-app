import { TestBed } from '@angular/core/testing';

import { ProfesseursService } from './professeurs.service';

describe('ProfesseursService', () => {
  let service: ProfesseursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesseursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
