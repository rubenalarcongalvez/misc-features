import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCustomPageComponent } from './print-custom-page.component';

describe('PrintCustomPageComponent', () => {
  let component: PrintCustomPageComponent;
  let fixture: ComponentFixture<PrintCustomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintCustomPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintCustomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
