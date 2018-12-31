import { TestBed } from '@angular/core/testing';

import { NavHelperService } from './nav-helper.service';

describe('NavHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavHelperService = TestBed.get(NavHelperService);
    expect(service).toBeTruthy();
  });
});
