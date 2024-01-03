import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengInputGroupComponent } from './primeng-input-group.component';

describe('PrimengInputGroupComponent', () => {
  let component: PrimengInputGroupComponent;
  let fixture: ComponentFixture<PrimengInputGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengInputGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengInputGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
