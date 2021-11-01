import { TestBed } from '@angular/core/testing';

import { ReqresapiService } from './reqresapi.service';

describe('ReqresapiService', () => {
  let service: ReqresapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqresapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
