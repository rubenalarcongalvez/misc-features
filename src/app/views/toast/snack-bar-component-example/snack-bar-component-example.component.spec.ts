import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarComponentExampleComponent } from './snack-bar-component-example.component';

describe('SnackBarComponentExampleComponent', () => {
  let component: SnackBarComponentExampleComponent;
  let fixture: ComponentFixture<SnackBarComponentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackBarComponentExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnackBarComponentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
