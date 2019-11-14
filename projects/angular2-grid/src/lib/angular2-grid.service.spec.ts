import { TestBed } from '@angular/core/testing';

import { Angular2GridService } from './angular2-grid.service';

describe('Angular2GridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Angular2GridService = TestBed.get(Angular2GridService);
    expect(service).toBeTruthy();
  });
});
