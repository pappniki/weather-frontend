import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class LoggerService {

  message = new Subject<string>();
  basicUrl = 'https://swapi.dev/api/planets';
  newPlanet = {
    name: 'Tatuin',
    population: 12000000
  }


  ///////////////////http api////////////////////////////////

  constructor(private http: HttpClient) {
  }

  logInfo(message) {
    console.log(message)
  }

  logError(message) {
    console.error(message);
  }

  ///// GET ///////////
  getPlanets(): Observable<any> {
    return this.http.get<any>(this.basicUrl);
  }

  //// POST és PUT /////
  makeNewPlanet(planet): Observable<any> {
    return this.http.post(this.basicUrl, planet);
  }

  //// DELETE ////
  deletePlanetById(id): Observable<any> {
    return this.http.delete(this.basicUrl);
  }
}
