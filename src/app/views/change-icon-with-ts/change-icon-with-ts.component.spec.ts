import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeIconWithTsComponent } from './change-icon-with-ts.component';

describe('ChangeIconWithTsComponent', () => {
  let component: ChangeIconWithTsComponent;
  let fixture: ComponentFixture<ChangeIconWithTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeIconWithTsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeIconWithTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
