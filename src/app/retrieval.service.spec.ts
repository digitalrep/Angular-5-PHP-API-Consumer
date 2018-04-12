import { TestBed, inject } from '@angular/core/testing';

import { RetrievalService } from './retrieval.service';

describe('RetrievalServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrievalService]
    });
  });

  it('should be created', inject([RetrievalService], (service: RetrievalService) => {
    expect(service).toBeTruthy();
  }));
});
