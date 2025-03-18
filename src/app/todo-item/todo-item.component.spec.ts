import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoItemComponent } from './todo-item.component';
import { By } from '@angular/platform-browser';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    component.task = { name: 'Learn Angular', completed: false }; // Initialize with a mock task
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should display the task name', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('span').textContent).toContain('Learn Angular');
    });

    it('should toggle task completion on checkbox change', () => {
      const checkbox = fixture.debugElement.query(By.css('input[type="checkbox"]')).nativeElement;

      // Initial state (task not completed)
      expect(component.task.completed).toBeFalsy();

      // Simulate checkbox click (mark as completed)
      checkbox.click();
      fixture.detectChanges();
      expect(component.task.completed).toBeTruthy();

      // Simulate checkbox click again (mark as not completed)
      checkbox.click();
      fixture.detectChanges();
      expect(component.task.completed).toBeFalsy();
    });

    it('should apply the completed class when the task is completed', () => {
      const span = fixture.debugElement.query(By.css('span')).nativeElement;

      // Task is initially incomplete
      expect(span.classList).not.toContain('completed');

      // Mark task as completed
      component.task.completed = true;
      fixture.detectChanges();
      expect(span.classList).toContain('completed');
    });

    it('should not apply the completed class when the task is not completed', () => {
      const span = fixture.debugElement.query(By.css('span')).nativeElement;

      // Task is initially incomplete
      expect(span.classList).not.toContain('completed');
    });
  });
});
