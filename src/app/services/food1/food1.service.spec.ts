import { TestBed } from '@angular/core/testing';

import { Food1Service } from './food1.service';

describe('Food1Service', () => {
  let service: Food1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Food1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
