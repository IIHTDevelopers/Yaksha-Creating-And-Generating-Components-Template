import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() task!: { name: string, completed: boolean };

  toggleComplete() {
    this.task.completed = !this.task.completed;
  }
}
