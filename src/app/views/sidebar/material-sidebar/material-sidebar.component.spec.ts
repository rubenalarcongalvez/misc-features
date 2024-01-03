import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSidebarComponent } from './material-sidebar.component';

describe('MaterialSidebarComponent', () => {
  let component: MaterialSidebarComponent;
  let fixture: ComponentFixture<MaterialSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
