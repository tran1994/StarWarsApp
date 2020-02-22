import { Component, OnInit } from '@angular/core';
import { MoviesserviceeService } from '../moviesservicee.service';
import { film } from '../film.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  x:film[];
  showLoading: boolean =true;

  constructor(
    private peopleService: MoviesserviceeService,
  ) {}

  ngOnInit() {
     this.peopleService.getPeople().subscribe(
       response =>{this.x=response['results'];
       this.showLoading=false;}

     )
   

  }
}
