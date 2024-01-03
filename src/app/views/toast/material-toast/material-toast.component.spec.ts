import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialToastComponent } from './material-toast.component';

describe('MaterialToastComponent', () => {
  let component: MaterialToastComponent;
  let fixture: ComponentFixture<MaterialToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialToastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
