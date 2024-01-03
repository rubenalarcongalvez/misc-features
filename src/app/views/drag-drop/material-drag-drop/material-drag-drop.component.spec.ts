import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDragDropComponent } from './material-drag-drop.component';

describe('MaterialDragDropComponent', () => {
  let component: MaterialDragDropComponent;
  let fixture: ComponentFixture<MaterialDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialDragDropComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
