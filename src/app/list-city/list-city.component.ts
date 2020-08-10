import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoggerService} from "../../service/loggerService";

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css']
})
export class ListCityComponent implements OnInit {

  @Input() cityList = [];
  @Output() chosenCity = new EventEmitter<string>();

  constructor(private myLogger: LoggerService) {


  }

  ngOnInit(): void {
  }

  chooseCity(city: string) {
    this.chosenCity.emit(city);
    this.myLogger.message.next(city);
  }
}
