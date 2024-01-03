import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengFieldsetComponent } from './primeng-fieldset.component';

describe('PrimengFieldsetComponent', () => {
  let component: PrimengFieldsetComponent;
  let fixture: ComponentFixture<PrimengFieldsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengFieldsetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengFieldsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
