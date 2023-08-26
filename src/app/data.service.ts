import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }
}
