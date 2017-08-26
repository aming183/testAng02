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
  data$;

  constructor(private dataService: DataService) {
    this.data$ = dataService.load();
  }

  doSearch(str: string) {
    this.keyword = str;
  }

  doDeleteArticle(item: any) {

    this.dataService.remove(item.id).subscribe((res) => {
    },
      (err) => {
        console.log(err);
      });
  }

}
