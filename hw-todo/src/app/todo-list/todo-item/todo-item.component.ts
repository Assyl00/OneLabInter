import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: any;
  @Input() itemIndex: number = 0;
  @Output() deleteHandle = new EventEmitter ();

  constructor() { }

  ngOnInit(): void {
  }

  toggleItem(){
    this.item.completed = !this.item.completed;
  }
  
  // deleteaAndle(index: number) {
  //   this.todoList.splice(index, 1);
  // }

}
