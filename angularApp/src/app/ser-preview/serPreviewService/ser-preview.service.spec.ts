import { TestBed, inject } from '@angular/core/testing';

import { SerPreviewService } from './ser-preview.service';

describe('SerPreviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerPreviewService]
    });
  });

  it('should be created', inject([SerPreviewService], (service: SerPreviewService) => {
    expect(service).toBeTruthy();
  }));
});
