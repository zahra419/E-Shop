import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrontComponent } from './front.component';

describe('FrontComponent', () => {
  let component: FrontComponent;
  let fixture: ComponentFixture<FrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontComponent ],
      imports:[BrowserAnimationsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
