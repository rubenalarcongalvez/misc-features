import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialListboxComponent } from './material-listbox.component';

describe('MaterialListboxComponent', () => {
  let component: MaterialListboxComponent;
  let fixture: ComponentFixture<MaterialListboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialListboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialListboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
