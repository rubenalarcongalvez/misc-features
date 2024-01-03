import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengTabMenuComponent } from './primeng-tab-menu.component';

describe('PrimengTabMenuComponent', () => {
  let component: PrimengTabMenuComponent;
  let fixture: ComponentFixture<PrimengTabMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengTabMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengTabMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
