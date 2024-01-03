import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengSliderComponent } from './primeng-slider.component';

describe('PrimengSliderComponent', () => {
  let component: PrimengSliderComponent;
  let fixture: ComponentFixture<PrimengSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
