import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialInputGroupComponent } from './material-input-group.component';

describe('MaterialInputGroupComponent', () => {
  let component: MaterialInputGroupComponent;
  let fixture: ComponentFixture<MaterialInputGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialInputGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialInputGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
