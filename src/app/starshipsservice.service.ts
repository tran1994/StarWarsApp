import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data5 } from './data5.model';

@Injectable({
  providedIn: 'root'
})
export class StarshipsserviceService {

  constructor(private http: HttpClient) { }


  getPeople(){
      return this.http.get<data5[]>("https://swapi.co/api/starships/");
     
      
  };
}
