import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from './data.model';



@Injectable({
  providedIn: 'root'
})
export class PeopleserviceService {

  constructor(private http: HttpClient) { }


  getPeople(){
      return this.http.get<data[]>("https://swapi.co/api/people/");
     
      
  };
}
