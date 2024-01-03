import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengProgressSpinnerComponent } from './primeng-progress-spinner.component';

describe('PrimengProgressSpinnerComponent', () => {
  let component: PrimengProgressSpinnerComponent;
  let fixture: ComponentFixture<PrimengProgressSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengProgressSpinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
