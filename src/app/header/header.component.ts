import { timeout } from '../../../node_modules/rxjs/src/operator/timeout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'The Will Will Web';

  counter = 0;

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.title = 'The Will Will Web (timeout)';
    }, 2000);

  }

  addCounter() {
    ++this.counter;
    console.log(this.counter);
    this.title = 'The Will Will Web ' + this.counter;
  }


}
