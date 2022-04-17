import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
<<<<<<< HEAD
export class AppComponent implements OnInit {
  

  

  // fullName = 'Armanov Arman';
  // age = 21;

  // toggleChildComp = true;
=======
export class AppComponent implements OnInit, OnChanges {
  fullName = 'Armanov Arman';
  age = 21;

  toggleChildComp = true;
>>>>>>> cad97172e295d5014ba5ddbc40a1e9d12f53d838

  constructor() {
  }

  ngOnInit() {
  }

<<<<<<< HEAD
  // ngOnChanges(changes: SimpleChanges) {
  //   for (let propName in changes) {
  //     let change = changes[propName];
  //     let current = JSON.stringify(change.currentValue);
  //     let prev = JSON.stringify(change.previousValue);
  //     console.log(`${propName}: currentValue = ${current}, previousValue = ${prev}`);
  //   }
  // }

  // dataHandleChild(data: string) {
  //   console.log(data);
  // }

  todoList = [
    {
      completed: false,
      name: 'Купить молоко'
    },
    {
      completed: true,
      name: 'Купить хлеб'
    },
    {
      completed: false,
      name: 'Купить масло'
    },
  ];

  addData(value: string) {
    if(value){
      this.todoList.push({
        completed: false,
        name: value
      });
=======
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let change = changes[propName];
      let current = JSON.stringify(change.currentValue);
      let prev = JSON.stringify(change.previousValue);
      console.log(`${propName}: currentValue = ${current}, previousValue = ${prev}`);
>>>>>>> cad97172e295d5014ba5ddbc40a1e9d12f53d838
    }
    
  }

<<<<<<< HEAD
=======
  dataHandleChild(data: string) {
    console.log(data);
  }
>>>>>>> cad97172e295d5014ba5ddbc40a1e9d12f53d838
}
