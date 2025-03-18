import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks = [
    { name: 'Learn Angular', completed: false },
    { name: 'Write Blog Post', completed: false },
    { name: 'Create a Portfolio', completed: false }
  ];
}
