import { Injectable } from '@angular/core';
import { Observable, map, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Training1ExerciseService {

  constructor() { }

  getTotalCalories(breakfast: number, lunch: number, dinner: number): number {
    return breakfast + lunch + dinner;
  }

  getAverageCalories(breakfast: number, lunch: number, dinner: number): number {
    return (breakfast + lunch + dinner) / 3; 
  }

  getCaloriesDifference(breakfast: number, lunch: number, dinner: number): number {
    if (breakfast < 0 || lunch < 0 || dinner < 0) {
      throw new Error('Calories cannot be negative');
    }
    return breakfast - lunch - dinner;
  }

  getBmi(weight: number, height: number): number {
    if (weight < 0 || height < 0) {
      throw new Error('Weight and height cannot be negative');
    }
    if (height <= 0) {
      throw new Error('Height cannot be zero or negative');
    }
    return weight / (height * height);
  }

  getBmiCategory(bmi: number): string {
    if (bmi < 0) {
      throw new Error('BMI cannot be negative');
    }
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi < 25) {
      return 'Normal weight';
    } else if (bmi < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }

  async getBreakfastCalories(): Promise<number> {
    return 500;
  }

  getLunchCalories(): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(800);
    });
  }

  getDinnerCalories(): Promise<number> {
    return new Promise((resolve, reject) => {
      reject('Error getting dinner calories');
    });
  }

  async getSupperCalories(): Promise<number> {
    try {
      throw new Error('Error getting supper calories');
    } catch (error) {
      throw error;
    }
  }

  getBreakfastCaloriesObservable(): Observable<number | any> {
    return of(500);
  }

  getLunchCaloriesObservable(): Observable<number> {
    return throwError(() => new Error('Error getting lunch calories'));
  }

  calculateTotalCaloriesInObservable(breakfast: number, lunch: number, dinner: number): Observable<number> {
    return of(breakfast + lunch + dinner)
            .pipe(
              map((totalCalories: number) => {
                if (totalCalories < 0) {
                  throw new Error('Total calories cannot be negative');
                }
                return totalCalories
              })
            );
  }





}
