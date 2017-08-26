import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

@Injectable()
export class DataService {

  constructor(private http: Http) {

  }

  load() {
   return  this.http.get('/api/articles.json');
  }



}
