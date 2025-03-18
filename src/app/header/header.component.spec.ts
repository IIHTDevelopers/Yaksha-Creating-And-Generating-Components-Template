import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should display the correct title', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('To-Do List');
    });

    it('should display the correct description', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('p').textContent).toContain('A simple To-Do List application to manage tasks.');
    });

    it('should render the title in an <h1> tag', () => {
      const h1Element = fixture.debugElement.query(By.css('h1')).nativeElement;
      expect(h1Element.textContent).toBe('To-Do List');
    });

    it('should render the description in a <p> tag', () => {
      const pElement = fixture.debugElement.query(By.css('p')).nativeElement;
      expect(pElement.textContent).toBe('A simple To-Do List application to manage tasks.');
    });
  });
});
