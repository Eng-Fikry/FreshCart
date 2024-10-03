import { TestBed } from '@angular/core/testing';

import { ItmsService } from './itms.service';

describe('ItmsService', () => {
  let service: ItmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
