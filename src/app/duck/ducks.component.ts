import { Component, OnDestroy, OnInit } from '@angular/core';
import {DuckService} from "../shared/services/duck.service";
import {IDuck} from "../shared/models/duck.model";

@Component({
  selector: 'app-ducks',
  templateUrl: './ducks.component.html'
})
export class DucksComponent implements OnInit, OnDestroy {

  private subscribtion;

  ngOnDestroy(): void {
  }

  ducks: IDuck[];

  constructor(private httpDuckService: DuckService) { }

  ngOnInit() {
    this.getDucks();
    this.subscribtion = this.httpDuckService.ducksChanged.subscribe(
      () => this.getDucks()
    );
  }

  getDucks(){
    this.httpDuckService.getDucks().subscribe(
      (ducks: IDuck[]) => this.ducks = ducks
    )
  }

  deleteDuck(id: number){
    this.httpDuckService.deleteDuck(id);
  }



}
