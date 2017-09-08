import { Component, OnInit } from '@angular/core';
import { DuckService } from '../shared/services/duck.service';
import { Observable } from 'rxjs/Observable';
import { Duck } from '../shared/models/duck.model';

@Component({
  selector: 'app-duck',
  templateUrl: './duck.component.html',
  styleUrls: ['./duck.component.css']
})
export class DuckComponent implements OnInit {

  private ducks$: Observable<Duck[]>;

  constructor(private duckService: DuckService) {
  }

  ngOnInit() {
    this.getDucks();
  }

  removeDuck(id: number) {
    this.duckService.deleteDuck(id);
    this.getDucks();
  }

  addDuck(duck: Duck){
    this.duckService.addDuck(duck);
    this.getDucks();
  }

  public getDucks(){
    this.ducks$ = this.duckService.getDucks();
  }

}
