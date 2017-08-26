import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) {

  }

  /* 在大括號內要用 return */
  load() {
    return this.http.get('/api/articles.json')
      .map(res => { return res.json() });
  }

  /*
  load() {
    return this.http.get('/api/articles.json')
      .map(res => res.json());
  }
  */

  remove(id) {
    return this.http.delete('/api/articles/' + id);
  }

}
