import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { environment } from './../environments/environment';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {

  constructor(
    private http: Http
  ) { }

  // Fetch data from API
  get():Observable<any>{
    return this.http.get(environment.apiURL)
    .map((response: Response) => response.json())
    .catch((response) => this.handleErrors(response))
  }


  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}
