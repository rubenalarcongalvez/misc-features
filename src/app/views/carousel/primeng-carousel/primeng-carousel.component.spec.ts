import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengCarouselComponent } from './primeng-carousel.component';

describe('PrimengCarouselComponent', () => {
  let component: PrimengCarouselComponent;
  let fixture: ComponentFixture<PrimengCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
