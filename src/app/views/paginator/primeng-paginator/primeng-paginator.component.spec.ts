import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengPaginatorComponent } from './primeng-paginator.component';

describe('PrimengPaginatorComponent', () => {
  let component: PrimengPaginatorComponent;
  let fixture: ComponentFixture<PrimengPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengPaginatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
