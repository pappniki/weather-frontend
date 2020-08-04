import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  cityList = [];
  chosenCity: string;

  constructor() {
    this.cityList = this.getCityList();
  }

  getCityList() {
    let tempList = [
      {city: 'Paris', population: 3100000},
      {city: 'Budapest', population: 2000000},
      {city: 'Bécs', population: 2500000},
      {city: 'London', population: 4000000},
      {city: 'Berlin', population: 2500000}
    ];

    return tempList;
  }

  chooseCity(city: any) {
    this.chosenCity = city;
  }
}
