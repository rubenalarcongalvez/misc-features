import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengRatingComponent } from './primeng-rating.component';

describe('PrimengRatingComponent', () => {
  let component: PrimengRatingComponent;
  let fixture: ComponentFixture<PrimengRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengRatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
