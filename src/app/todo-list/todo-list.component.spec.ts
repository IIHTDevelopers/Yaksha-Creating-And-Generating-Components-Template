import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent, TodoItemComponent], // Import TodoItemComponent for testing
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should render the correct number of todo-item components', () => {
      const todoItems = fixture.debugElement.queryAll(By.directive(TodoItemComponent));
      expect(todoItems.length).toBe(component.tasks.length);
    });

    it('should pass the correct task data to each todo-item component', () => {
      const todoItems = fixture.debugElement.queryAll(By.directive(TodoItemComponent));

      todoItems.forEach((debugElement: DebugElement, index: number) => {
        const todoItemComponent = debugElement.componentInstance;
        expect(todoItemComponent.task).toEqual(component.tasks[index]);
      });
    });

    it('should render task names in the todo-item components', () => {
      const todoItems = fixture.debugElement.queryAll(By.directive(TodoItemComponent));
      todoItems.forEach((debugElement: DebugElement, index: number) => {
        const taskName = debugElement.nativeElement.querySelector('span').textContent;
        expect(taskName).toBe(component.tasks[index].name);
      });
    });
  });
});
