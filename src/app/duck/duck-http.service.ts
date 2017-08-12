import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {environment} from "../../environments/environment";
import {Observable, Subject} from "rxjs";
import {Duck} from "./duck.model";

@Injectable()
export class DuckHttpService {

  ducksChanged = new Subject();

  constructor(private http: Http) {
  }

  getDucks() {
    return this.http.get(environment.apiUrl + '/ducks').map(
      (response: Response) => {
        console.log(response);
        console.log(response.json());
        return response.json();
      }
    ).catch(
      (error: Response) => {
        return Observable.throw('something went wrong');
      }
    );
  }

  deleteDuck(id: number) {
    this.http .delete(environment.apiUrl + '/ducks/' + id).subscribe(
      () => this.ducksChanged.next()
    );
  }

  addDuck(duck: Duck) {
    this.http.post(environment.apiUrl + '/ducks', duck).subscribe(
      () => this.ducksChanged.next()
    );
  }

}
