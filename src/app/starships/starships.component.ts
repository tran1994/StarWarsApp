import { Component, OnInit } from '@angular/core';
import { StarshipsserviceService } from '../starshipsservice.service';
import { starship } from '../starship.model';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  x:starship[];
  showLoading: boolean =true;


  constructor(
    private peopleService: StarshipsserviceService,
  ) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe(response =>{
      this.x=response['results'];
    this.showLoading=false;
   });
}

}
