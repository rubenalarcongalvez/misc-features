import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCalendarComponent } from './material-calendar.component';

describe('MaterialCalendarComponent', () => {
  let component: MaterialCalendarComponent;
  let fixture: ComponentFixture<MaterialCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
