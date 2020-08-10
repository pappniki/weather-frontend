import {Component} from '@angular/core';
import {LoggerService} from "../service/loggerService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  cityList = [];
  chosenCity: string;
  message = '';

  constructor(private myLogger: LoggerService) {
    this.cityList = this.getCityList();
    myLogger.message.subscribe(
      (message) => {
        this.message = message
      },
      error => console.log(error),
      () => console.log('completed'));
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

  makeNewPlanet(planet: any) {
    this.myLogger.makeNewPlanet(planet).subscribe(
      (message) => console.log(message),
      (error) => console.log(error),
      () => console.log('completed')
    )
  }

  deleteById(id: number) {
    this.myLogger.deletePlanetById(id).subscribe(
      (message) => console.log(message)
    )
  }

  getPlanetCityList() {
    this.myLogger.getPlanets().subscribe(
      (cityList) => this.cityList = cityList
    )
  }
}
