import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Training1Service {

  // This is a simple service to understand assertions in unit tests

  constructor() { }

  addTwoNumbers(a: number, b: number): number {
    return a + b;
  }

  subtractTwoNumbers(a: number, b: number): number {
    return a - b;
  }

  multiplyTwoNumbers(a: number, b: number): number {
    return a * b;
  }

  divideTwoNumbers(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }

  toThrowError() {
    throw new Error('this is an error')
  }

  returnPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('Promise resolved');
    });
  }

  rejectPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      reject('Promise rejected');
    });
  }

  returnObservable(): Observable<string> {
    return of('Observable resolved');
  }

  returnObservableError(): Observable<string> {
    return new Observable(observer => {
      observer.error('Observable error');
    });
  }

}
