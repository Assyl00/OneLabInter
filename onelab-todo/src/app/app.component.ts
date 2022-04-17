import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  fullName = 'Armanov Arman';
  age = 21;

  toggleChildComp = true;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let change = changes[propName];
      let current = JSON.stringify(change.currentValue);
      let prev = JSON.stringify(change.previousValue);
      console.log(`${propName}: currentValue = ${current}, previousValue = ${prev}`);
    }
  }

  dataHandleChild(data: string) {
    console.log(data);
  }
}
