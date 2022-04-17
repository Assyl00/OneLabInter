import {Component, Input, OnInit} from '@angular/core';
import Todo from "../models/Todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() list: Todo[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteItem(index: number) {
    this.list.splice(index, 1);
  }

}
