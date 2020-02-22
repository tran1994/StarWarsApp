import { Component, OnInit } from '@angular/core';
import { VehiclesserviceService } from '../vehiclesservice.service';
import { vehicle } from '../vehicle.model';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  x:vehicle[];
  showLoading: boolean =true;

  constructor(
    private peopleService: VehiclesserviceService,
  ) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe(response =>{
      this.x=response['results'];
    this.showLoading=false;
   });

  }
}
