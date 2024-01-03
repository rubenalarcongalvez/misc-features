import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTabMenuComponent } from './material-tab-menu.component';

describe('MaterialTabMenuComponent', () => {
  let component: MaterialTabMenuComponent;
  let fixture: ComponentFixture<MaterialTabMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialTabMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialTabMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
