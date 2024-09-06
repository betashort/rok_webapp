import { TestBed } from '@angular/core/testing';

import { AooResisterService } from './aoo-resister.service';

describe('AooResisterService', () => {
  let service: AooResisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AooResisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
