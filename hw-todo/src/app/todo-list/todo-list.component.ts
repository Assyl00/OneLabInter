import { Component, Input, OnInit, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() list: any;

  constructor() { }

  

  ngOnInit(): void {
  }

  
  
  deleteTodo(index: number) {
    this.list.splice(index, 1);
  }

}
