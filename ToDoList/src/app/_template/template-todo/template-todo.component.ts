import { Component, OnInit } from '@angular/core';
import { Todo } from '../../_interface/todo';

@Component({
  selector: 'app-template-todo',
  templateUrl: './template-todo.component.html',
  styleUrls: ['./template-todo.component.sass'],
})
export class TemplateTodoComponent implements OnInit {
  public toDo$: Todo;

  constructor() {
    this.toDo$ = {
      id: 1,
      label: 'ToDo',
      status: false,
      position: 1,
    };
  }

  ngOnInit() {}

  public changeCheck(event?: any): void {
    this.toDo$.status = !this.toDo$.status;
  }
}
