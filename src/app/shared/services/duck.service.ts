import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { Duck } from 'app/shared/models/duck.model';

@Injectable()
export class DuckService {

  constructor(private http: Http) {
  }


  getDucks(): Observable<Duck[]> {
    return this.http.get(environment.apiUrl + '/ducks').map(
      (response: Response) => {
        return response.json();
      }
    ).catch(
      (error: Response) => {
        return Observable.throw('something went wrong');
      }
    );
  }

  deleteDuck(id: number) {
    this.http.delete(environment.apiUrl + '/ducks/' + id).subscribe();
  }

  addDuck(duck: Duck) {
    this.http.post(environment.apiUrl + '/ducks', duck).subscribe();
  }

}
