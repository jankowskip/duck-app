import {Component, OnInit, OnDestroy} from '@angular/core';
import {DuckHttpService} from "../duck-http.service";
import {Duck} from "../duck.model";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-ducks-list',
  templateUrl: './ducks-list.component.html',
  styleUrls: ['./ducks-list.component.css']
})
export class DucksListComponent implements OnInit, OnDestroy{

  constructor(private duckHttp: DuckHttpService) {
  }

  subscription : Subscription;
  ducks: Duck[];

  ngOnInit() {
    this.getDucks();
     this.subscription = this.duckHttp.ducksChanged.subscribe(
      () => this.getDucks()
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private getDucks() {
    this.duckHttp.getDucks().subscribe(
      (ducks: Duck[]) => this.ducks = ducks
    )
  }

  onRemove(id: number) {
    this.duckHttp.deleteDuck(id);
  }
}
