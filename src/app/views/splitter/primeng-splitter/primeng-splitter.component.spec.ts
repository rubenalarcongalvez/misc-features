import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengSplitterComponent } from './primeng-splitter.component';

describe('PrimengSplitterComponent', () => {
  let component: PrimengSplitterComponent;
  let fixture: ComponentFixture<PrimengSplitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengSplitterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengSplitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
