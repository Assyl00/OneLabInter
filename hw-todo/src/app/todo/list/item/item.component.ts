import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Todo from "../../models/Todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: Todo = {name: '', completed: false};
  @Output() deleteHandle: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }
}
