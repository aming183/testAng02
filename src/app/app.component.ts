import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = environment.siteName;

  keyword = 'test';

  data;

  constructor(private dataService: DataService) {
    dataService.load()
      .subscribe(res => {
        this.data = res.json();
      });
  }

  doSearch(str: string) {
    this.keyword = str;
  }

  doDeleteArticle(item: any) {
    let i = this.data.indexOf(item);
    this.data.splice(i, 1);
  }
}
