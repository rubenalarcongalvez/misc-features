import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSliderComponent } from './material-slider.component';

describe('MaterialSliderComponent', () => {
  let component: MaterialSliderComponent;
  let fixture: ComponentFixture<MaterialSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
