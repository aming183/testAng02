import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

@Injectable()
export class DataService {

  constructor(private http: Http) {

    this.http.get('/api/articles.json').subscribe((res : Response) => {
      this.data = res.json();
      console.log(this.data);
    });

  }

  data;

}
