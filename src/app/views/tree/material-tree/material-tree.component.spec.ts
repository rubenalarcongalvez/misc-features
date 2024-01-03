import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTreeComponent } from './material-tree.component';

describe('MaterialTreeComponent', () => {
  let component: MaterialTreeComponent;
  let fixture: ComponentFixture<MaterialTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
