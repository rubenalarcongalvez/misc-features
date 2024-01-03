import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengDragDropComponent } from './primeng-drag-drop.component';

describe('PrimengDragDropComponent', () => {
  let component: PrimengDragDropComponent;
  let fixture: ComponentFixture<PrimengDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengDragDropComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
