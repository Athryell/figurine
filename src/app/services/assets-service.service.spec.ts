import { TestBed } from '@angular/core/testing';

import { AssetsServiceService } from './assets-service.service';

describe('AssetsServiceService', () => {
  let service: AssetsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
