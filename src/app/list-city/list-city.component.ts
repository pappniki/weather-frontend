import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css']
})
export class ListCityComponent implements OnInit {

  @Input() cityList = [];
  @Output() chosenCity = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  chooseCity(city: string) {
    this.chosenCity.emit(city);
  }
}
