import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data6 } from './data6.model';

@Injectable({
  providedIn: 'root'
})
export class VehiclesserviceService {


  constructor(private http: HttpClient) { }


  getPeople(){
      return this.http.get<data6[]>("https://swapi.co/api/vehicles/");
     
      
  };
}
