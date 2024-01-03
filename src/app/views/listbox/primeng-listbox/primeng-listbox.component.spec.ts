import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengListboxComponent } from './primeng-listbox.component';

describe('PrimengListboxComponent', () => {
  let component: PrimengListboxComponent;
  let fixture: ComponentFixture<PrimengListboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengListboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengListboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
