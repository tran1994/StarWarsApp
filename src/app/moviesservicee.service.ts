import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data2 } from './data2.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesserviceeService {

   constructor(private http: HttpClient) { }


  getPeople(){
      return this.http.get<data2[]>("https://swapi.co/api/films/");
     
      
  };
}
