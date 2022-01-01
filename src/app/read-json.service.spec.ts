import { TestBed } from '@angular/core/testing';

import { ReadJSONService } from './read-json.service';

describe('ReadJSONService', () => {
  let service: ReadJSONService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadJSONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
