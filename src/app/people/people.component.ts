import { Component, OnInit } from '@angular/core';
import { PeopleserviceService } from '../peopleservice.service';
import { people } from '../people.model';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

 x:people[];
 showLoading: boolean =true;

  constructor(
    private peopleService: PeopleserviceService,
  ) {}

  ngOnInit() {
     this.peopleService.getPeople().subscribe(response =>{
       this.x=response['results'];
     this.showLoading=false;
    });

  }



}
