import { TestBed } from '@angular/core/testing';

import { Training1Service } from './training1.service';

describe('Training1Service', () => {
  let service: Training1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Training1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  

});
