import { Component, OnInit } from '@angular/core';
import {DuckService} from "../../shared/services/duck.service";
import {IDuck} from "../../shared/models/duck.model";

@Component({
  selector: 'app-ducks-list',
  templateUrl: './ducks-list.component.html',
  styleUrls: ['./ducks-list.component.css']
})
export class DucksListComponent implements OnInit {

  ducks: IDuck[];

  constructor(private duckService: DuckService) { }

  ngOnInit() {
    this.getDucks();
    this.duckService.ducksChanged.subscribe(
      () => this.getDucks()
    )
  }

  getDucks(){
    this.duckService.getDucks().subscribe(
      (ducks: IDuck[]) => this.ducks = ducks
    )
  }

  deleteDuck(id: number){
    this.duckService.deleteDuck(id);
  }



}
