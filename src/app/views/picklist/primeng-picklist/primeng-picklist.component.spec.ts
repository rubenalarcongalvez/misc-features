import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengPicklistComponent } from './primeng-picklist.component';

describe('PrimengPicklistComponent', () => {
  let component: PrimengPicklistComponent;
  let fixture: ComponentFixture<PrimengPicklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengPicklistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengPicklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
