import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.css']
})
export class RandomNumberComponent {

  randomNumber: number | undefined;

  constructor(private dataService: DataService) { }

  generateRandomNumber() {
    this.randomNumber = this.dataService.getRandomNumber();
  }
}
