import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data4 } from './data4.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetsserviceService {

  constructor(private http: HttpClient) { }


  getPeople(){
      return this.http.get<data4[]>("https://swapi.co/api/planets/");
     
      
  };
}
