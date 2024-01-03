import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengTooltipComponent } from './primeng-tooltip.component';

describe('PrimengTooltipComponent', () => {
  let component: PrimengTooltipComponent;
  let fixture: ComponentFixture<PrimengTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengTooltipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
