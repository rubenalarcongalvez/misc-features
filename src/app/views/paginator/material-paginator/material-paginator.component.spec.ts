import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPaginatorComponent } from './material-paginator.component';

describe('MaterialPaginatorComponent', () => {
  let component: MaterialPaginatorComponent;
  let fixture: ComponentFixture<MaterialPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialPaginatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
