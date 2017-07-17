import { TestBed, inject } from '@angular/core/testing';

import { DuckHttpService } from './duck-http.service';

describe('DuckHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DuckHttpService]
    });
  });

  it('should be created', inject([DuckHttpService], (service: DuckHttpService) => {
    expect(service).toBeTruthy();
  }));
});
