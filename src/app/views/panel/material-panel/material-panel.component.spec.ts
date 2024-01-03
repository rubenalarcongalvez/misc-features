import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPanelComponent } from './material-panel.component';

describe('MaterialPanelComponent', () => {
  let component: MaterialPanelComponent;
  let fixture: ComponentFixture<MaterialPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
