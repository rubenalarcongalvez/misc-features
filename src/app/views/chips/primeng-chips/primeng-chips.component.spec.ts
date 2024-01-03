import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengChipsComponent } from './primeng-chips.component';

describe('PrimengChipsComponent', () => {
  let component: PrimengChipsComponent;
  let fixture: ComponentFixture<PrimengChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengChipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
