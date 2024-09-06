import { TestBed } from '@angular/core/testing';

import { AooService } from './aoo.service';

describe('AooService', () => {
  let service: AooService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AooService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
