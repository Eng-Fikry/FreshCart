import { TestBed } from '@angular/core/testing';

import { CategoService } from './catego.service';

describe('CategoService', () => {
  let service: CategoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
