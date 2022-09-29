import { TestBed } from '@angular/core/testing';

import { UserloggedService } from './userlogged.service';

describe('UserloggedService', () => {
  let service: UserloggedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserloggedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
