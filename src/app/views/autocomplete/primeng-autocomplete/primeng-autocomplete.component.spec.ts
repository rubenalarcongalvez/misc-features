import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengAutocompleteComponent } from './primeng-autocomplete.component';

describe('PrimengAutocompleteComponent', () => {
  let component: PrimengAutocompleteComponent;
  let fixture: ComponentFixture<PrimengAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengAutocompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
