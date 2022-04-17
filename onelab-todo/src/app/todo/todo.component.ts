import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
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

  constructor() {
  }

  ngOnInit(): void {
  }

  addData(value: string) {
    if (value) {
      this.todoList.push({
        completed: false,
        name: value
      });
    }
  }
}
