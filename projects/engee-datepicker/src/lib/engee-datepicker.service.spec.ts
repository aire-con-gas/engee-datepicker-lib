import { TestBed } from '@angular/core/testing';

import { EngeeDatepickerService } from './engee-datepicker.service';

describe('EngeeDatepickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EngeeDatepickerService = TestBed.get(EngeeDatepickerService);
    expect(service).toBeTruthy();
  });
});
