
import { Component, OnInit   } from '@angular/core';
import { CustomPipe } from './shared/pipes/custom.pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'second-week';

  searchName = '';

  items = [
    {
      id: 1,
      name: 'iPhone12',
      price: 1000
    },
    {
      id: 2,
      name: 'iPhone11',
      price: 950
    },
    {
      id: 3,
      name: 'iPhone13',
      price: 1200
    },
    {
      id: 4,
      name: 'iPhone12',
      price: 1000
    },
    {
      id: 5,
      name: 'iPhone14',
      price: 1350
    }
  ];

  constructor(private custom: CustomPipe){}



  search(){
    if(this.searchName == ''){
      this.items;
    }
    else
      this.items = this.custom.transform(this.items, this.searchName);
      console.log(this.items);
  }

}
