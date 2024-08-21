import { TestBed } from '@angular/core/testing';

import { Training1ExerciseService } from './training1-exercise.service';

fdescribe('Training1ExerciseService', () => {
  let service: Training1ExerciseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Training1ExerciseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

 
  
});
