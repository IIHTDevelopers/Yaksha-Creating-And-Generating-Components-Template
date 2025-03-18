import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent, HeaderComponent, TodoListComponent], // Import Header and TodoList components for testing
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('boundary', () => {
        it('should create the component', () => {
            expect(component).toBeTruthy();
        });

        it('should render the app-header component', () => {
            const headerElement = fixture.debugElement.query(By.css('app-header'));
            expect(headerElement).toBeTruthy();
        });

        it('should render the app-todo-list component', () => {
            const todoListElement = fixture.debugElement.query(By.css('app-todo-list'));
            expect(todoListElement).toBeTruthy();
        });
    });
});
