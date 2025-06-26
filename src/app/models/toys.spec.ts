import { TestBed } from '@angular/core/testing';

import { Toys } from './toys';

describe('Toys', () => {
  let service: Toys;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Toys);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
