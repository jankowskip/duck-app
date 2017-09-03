import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {environment} from "environments/environment";
import {Observable, Subject} from "rxjs";
import {IDuck} from "../models/duck.model";

@Injectable()
export class DuckService {

  constructor(private http: Http) {}

  ducksChanged = new Subject();

  getDucks(){
    return this.http.get(environment.apiUrl + '/ducks').map(
      (response: Response) => response.json()
    ).catch(
      (error: Response) => Observable.throw('dupa')
    )
  }


  deleteDuck(id: number){
    this.http.delete(environment.apiUrl + '/ducks/' + id).subscribe(
      () => this.ducksChanged.next()
    )
  }

  postDuck(duck: IDuck){
    this.http.post(environment.apiUrl + '/ducks', duck).subscribe(
      () => this.ducksChanged.next()
    );
  }

}
