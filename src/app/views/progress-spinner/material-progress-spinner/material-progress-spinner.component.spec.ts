import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialProgressSpinnerComponent } from './material-progress-spinner.component';

describe('MaterialProgressSpinnerComponent', () => {
  let component: MaterialProgressSpinnerComponent;
  let fixture: ComponentFixture<MaterialProgressSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialProgressSpinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
