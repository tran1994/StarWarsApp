import { Component, OnInit } from '@angular/core';
import { PlanetsserviceService } from '../planetsservice.service';
import { planet } from '../planet.model';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

 
  x:planet[];
  showLoading: boolean =true;

  constructor(
    private peopleService: PlanetsserviceService,
  ) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe(response =>{
      this.x=response['results'];
    this.showLoading=false;
   });
  }
}
