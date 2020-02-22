import { Component, OnInit } from '@angular/core';
import { SpeciesserviceService } from '../Speciesservice.service';
import { species } from '../species.model';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  x:species[];
  showLoading: boolean =true;

  constructor(
    private peopleService: SpeciesserviceService,
  ) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe(response =>{
      this.x=response['results'];
    this.showLoading=false;
   });
}

}
